import JsPDF from 'jspdf';

export const savePdf = (template: string, name: string) => {
  const doc = new JsPDF();

  doc.fromHTML(template, 15, 15, {
    width: 400,
  });
  doc.save(`${name}.pdf`);
};
