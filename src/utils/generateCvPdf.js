import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";

pdfMake.vfs = pdfFonts;

const baseUrl = window.location.origin + import.meta.env.BASE_URL;

pdfMake.fonts = {
  Roboto: {
    normal: "Roboto-Regular.ttf",
    bold: "Roboto-Medium.ttf",
    italics: "Roboto-Italic.ttf",
    bolditalics: "Roboto-MediumItalic.ttf",
  },
  ComputerModern: {
    normal: `${baseUrl}fonts/NewCM10-Regular.ttf`,
    bold: `${baseUrl}fonts/NewCM10-Bold.ttf`,
    italics: `${baseUrl}fonts/NewCM10-Italic.ttf`,
    bolditalics: `${baseUrl}fonts/NewCM10-BoldItalic.ttf`,
  }
};

export function generateCvPdf(cvData, lang, contactData, agreementText, aboutData) {
  const content = [];
  const accentColor = "#636F20";

  function addSectionHeader(title) {
    return [
      { text: title.toUpperCase(), style: "sectionTitle" },
      {
        canvas: [{ type: "line", x1: 0, y1: 0, x2: 523, y2: 0, lineWidth: 0.5, lineColor: "#777777" }],
        style: "sectionLine",
      },
    ];
  }

  content.push({ text: "MICHAŁ RUSINEK", style: "header" });
  content.push({ text: "Machine Learning Engineer", style: "subtitle" });

  if (contactData && contactData.elements) {
    const buildLine = (elements) => {
      const lineText = [];
      elements.forEach((el, index) => {
        lineText.push({ text: el.title + ": ", color: accentColor, bold: true });
        lineText.push(el.value);
        if (index < elements.length - 1) {
          lineText.push(" · ");
        }
      });
      return lineText;
    };

    if (contactData.elements.length >= 3) {
      content.push({ text: buildLine(contactData.elements.slice(0, 2)), style: "contact" });
      content.push({ text: buildLine(contactData.elements.slice(2)), style: "contactBottom" });
    } else {
      content.push({ text: buildLine(contactData.elements), style: "contactBottom" });
    }
  }

  if (aboutData && aboutData.title && aboutData.text) {
    content.push({
      stack: [
        ...addSectionHeader(lang === "en" ? "SUMMARY" : "PODSUMOWANIE"),
        { text: aboutData.text, style: ["bodyText", "summaryContainer"] }
      ],
      unbreakable: true
    });
  }

  const keys = Object.keys(cvData);
  for (const key of keys) {
    const section = cvData[key];
    if (!section.title || !section.elements || section.elements.length === 0) continue;

    if (key === "intr") {
      const allInterests = section.elements.map((el) => el.title).join(" · ");
      content.push({
        stack: [
          ...addSectionHeader(section.title),
          { text: allInterests, style: "bodyText", alignment: "center" }
        ],
        unbreakable: true
      });
      continue;
    }

    if (key === "soft") {
      const allSoft = section.elements.map((el) => el.title).join(", ");
      content.push({
        stack: [
          ...addSectionHeader(section.title),
          { text: allSoft, style: "bodyText", alignment: "center" }
        ],
        unbreakable: true
      });
      continue;
    }

    if (key === "lang") {
      const allLang = section.elements.map((el) => {
        const level = el.vertical_elements && el.vertical_elements[0] ? ` (${el.vertical_elements[0]})` : "";
        return `${el.title}${level}`;
      }).join(", ");
      content.push({
        stack: [
          ...addSectionHeader(section.title),
          { text: allLang, style: "bodyText", alignment: "center" }
        ],
        unbreakable: true
      });
      continue;
    }

    let isFirstItemOfSection = true;

    if (key === "tech" || section.elements[0].horizontal_elements) {
      const techStack = {
        stack: [...addSectionHeader(section.title)],
        unbreakable: true,
        style: "techStackContainer",
      };
      for (const el of section.elements) {
        techStack.stack.push({
          text: [
            { text: el.title + ": ", bold: true },
            el.horizontal_elements.join(", "),
          ],
          style: ["bullet", "techBulletContainer"],
        });
      }
      content.push(techStack);
      continue;
    }

    for (const el of section.elements) {
      if (el.company) {
        for (let i = 0; i < el.elements.length; i++) {
          const role = el.elements[i];
          const roleStack = {
            stack: [],
            unbreakable: true,
            style: "roleStackContainer",
          };

          if (isFirstItemOfSection) {
            roleStack.stack.push(...addSectionHeader(section.title));
            isFirstItemOfSection = false;
          }

          if (i === 0) {
            roleStack.stack.push({
              columns: [
                { text: el.company, style: "companyName", width: "*" },
                { text: el.location, style: "locationText", width: "auto" },
              ],
              style: "companyHeaderContainer",
            });
          }

          roleStack.stack.push({
            columns: [
              { text: role.title, style: "roleTitle", width: "*" },
              { text: role.vertical_elements[0], style: "rightAlignedDates", width: "auto" },
            ],
            style: "roleHeaderContainer",
          });

          const bullets = role.vertical_elements[1];
          if (bullets && Array.isArray(bullets)) {
            roleStack.stack.push({
              ul: bullets.map((b) => ({ text: b, style: "bullet" })),
              style: "bulletContainer",
            });
          }

          if (role.horizontal_elements) {
            roleStack.stack.push({
              text: [
                { text: lang === "en" ? "Tech stack: " : "Technologie: ", bold: true },
                role.horizontal_elements.join(", "),
              ],
              style: ["bulletSecondary", "secondaryBulletContainer"],
            });
          }
          content.push(roleStack);
        }
      } else if (el.vertical_elements) {
        const eduStack = {
          stack: [],
          unbreakable: true,
          style: "eduStackContainer",
        };

        if (isFirstItemOfSection) {
          eduStack.stack.push(...addSectionHeader(section.title));
          isFirstItemOfSection = false;
        }

        eduStack.stack.push(
          {
            columns: [
              { text: el.title, style: "companyName", width: "*" },
              { text: el.location || el.vertical_elements[1] || "", style: "locationText", width: "auto" },
            ],
          },
          { text: el.vertical_elements[0] || "", style: ["roleTitle", "eduRoleHeaderContainer"] },
          ...(el.vertical_elements[2] && Array.isArray(el.vertical_elements[2])
            ? [
                {
                  ul: el.vertical_elements[2].map((b) => ({ text: b, style: "bullet" })),
                  style: "eduBulletContainer",
                },
              ]
            : [])
        );
        content.push(eduStack);
      }
    }
  }

  const docDefinition = {
    content: content,
    pageMargins: [36, 36, 36, 50],
    footer: function (currentPage, pageCount) {
      if (currentPage === pageCount && agreementText) {
        return {
          text: agreementText,
          style: "agreement",
          margin: [36, 0, 36, 0],
        };
      }
      return null;
    },
    defaultStyle: {
      font: "ComputerModern",
      fontSize: 11,
      lineHeight: 0.8,
      color: "#000000",
    },
    styles: {
      // margin: [left, top, right, bottom]
      header: { fontSize: 22, bold: true, alignment: "center", color: accentColor, margin: [0, 0, 0, 1] },
      subtitle: { fontSize: 14, bold: true, alignment: "center", margin: [0, 0, 0, 4] },
      contact: { alignment: "center", margin: [0, 0, 0, 1] },
      contactBottom: { alignment: "center", margin: [0, 0, 0, 2] },
      sectionTitle: { fontSize: 14, bold: true, color: accentColor, alignment: "center", margin: [0, 2, 0, 2] },
      sectionLine: { margin: [0, 1, 0, 2] },
      companyName: { fontSize: 13, bold: true },
      locationText: { fontSize: 13, bold: true, alignment: "right" },
      roleTitle: { fontSize: 12, color: accentColor, italics: true, bold: true },
      rightAlignedDates: { fontSize: 12, italics: true, alignment: "right" },
      bullet: { margin: [0, 0.2, 0, 0.2] },
      bulletSecondary: { color: "#333333" },
      bodyText: { alignment: "justify" },
      agreement: { fontSize: 8, color: "#666666", alignment: "center" },
      summaryContainer: { margin: [0, 0, 0, 0] },
      techStackContainer: { margin: [0, 0, 0, 0] },
      techBulletContainer: { margin: [0, 0, 0, 0] },
      roleStackContainer: { margin: [0, 0, 0, 0] },
      companyHeaderContainer: { margin: [0, 0, 0, 0] },
      roleHeaderContainer: { margin: [0, 0, 0, 0] },
      bulletContainer: { margin: [10, 0, 0, 0] },
      secondaryBulletContainer: { margin: [10, 0, 0, 0] },
      eduStackContainer: { margin: [0, 0, 0, 0] },
      eduRoleHeaderContainer: { margin: [0, 0, 0, 0] },
      eduBulletContainer: { margin: [10, 0, 0, 0] },
    },
  };

  const filename = lang === "en" ? "CV_Michal_Rusinek_EN.pdf" : "CV_Michal_Rusinek_PL.pdf";
  pdfMake.createPdf(docDefinition).download(filename);
}
