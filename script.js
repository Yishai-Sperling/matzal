var sentences = [
  "!חייל, שפר הופעתך",
  ".המחנה הוא ביתך, שמור על ניקיונו",
  ".צבוע זה חדש; רטוב זה נקי; מערום זה מסודר; בורקס זה חגיגי",
  ".עגלות יש רק בסופר, וגם אותן סוחבים",
  "??אומרים שהכל בראש. אז למה כואבות לי הרגליים",
  ".חול זה טעים, קוצים זה נעים, קשה יש רק בלחם וגם אותו אוכלים",
  ".כבד יש רק באווזי",
  ".כבד יש רק בפיתה",
  "נוח היה רק בתיבה",
  "חם זה רק אח של יפת",
  "קשה יש רק בלחם, וגם אותו אמא מוציאה לי",
  "קשה יש רק בלחם, וגם מזה יש לי פטור",
  "קשה יש רק בבוקר, וגם זה עובר",
  "קשה באימונים - קל בקרב",
  "הפשרה של היום היא הנורמה של מחר",
  "ההון האנושי הוא הנשק האמיתי של צהל",
  ".פעם אחת - מקרה. פעם שנייה - תופעה. פעם שלישית - סטטיסטיקה. פעם רביעית -מגיפה",
  "הוראות אלו נכתבו בדם",
  "תוצאות, לא תירוצים",
  "חבית של זיעה שווה טיפה של דם",
  "זה מה שיש, ועם זה ננצח",
  "אין לא יכול, יש לא רוצה",
  "קרבי זה הכי אחי",
  "או סיירת, או ניירת",
  "אל תחפש היגיון בשיגעון!",
  "יום יבוא והשמש תזרח ואני אהיה אזרח",
  "כשנולדתי בכיתי, כשהתגייסתי הבנתי למה",
  "אם לא תלמד, תהיה נגד, אם תלשין, תהיה קצין",
  "?ידית התסערות זה סטנדרט בנחל",
  "אין לא יכול, יש לא יכולה",
  "יום בצבא זה כמו קפה, או שהוא שחור או שהוא נס",
  "ציפיות יש רק בכרית",
  "קר-זה רק מכונית באנגלית",
  "פינוק זה רק שמפו",
  "צדק זה רק כוכב"
];

function readText() {
  const filename = "./sentences.txt";
  async function asyncReadFile(filename) {
  try {
    const contents = await fsPromises.readFile(filename, 'utf-8');

    const arr = contents.split(",");

    console.log(arr); // 👉️ ['One', 'Two', 'Three', 'Four']

    return arr;
  } catch (err) {
    console.log(err);
  }
  }
}

function generate() {
  //var sentences = readText()
  var randomIndex = Math.floor(Math.random() * sentences.length);
  var randomSentence = sentences[randomIndex];
  document.getElementById("sentence").innerHTML = randomSentence;
}