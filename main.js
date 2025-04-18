const quiz = [
  {
    text: "คุณตื่นเช้ามาแล้วเจอฝนตก คุณจะทำยังไง?",
    choices: [
      "ลุยฝนเลย ชีวิตต้องไปต่อ",
      "กลับไปนอนต่อ ฝนตก = โอกาสทอง",
      "ถ่ายรูปลงสตอรี่ “ฝนกับกาแฟ”",
      "โทรบ่นให้เพื่อนฟัง"
    ]
  },
  {
    text: "วันหยุดในฝันของคุณคืออะไร?",
    choices: [
      "ทริปปีนเขา ทะลุเมฆ",
      "นอนตีพุงอยู่บ้าน",
      "คาเฟ่เก๋ ๆ ถ่ายรูปลง IG",
      "กินบุฟเฟ่ต์ 3 มื้อ 7 วัน"
    ]
  },
  {
    text: "เพื่อนชวนไปออกเดทบอด คุณจะ...?",
    choices: [
      "ไป! สนุกดีจะตาย",
      "ต้องเช็กก่อนว่าหน้าตายังไง",
      "ไม่ไป ขี้เกียจแต่งตัว",
      "ไปแบบไม่คาดหวัง แต่อาจมีแผนสำรอง"
    ]
  },
  {
    text: "สิ่งแรกที่คุณทำตอนตื่นนอนคืออะไร?",
    choices: [
      "ลุกเลย ไปอาบน้ำ!",
      "หยิบมือถือ เช็กทุกแอป",
      "กลิ้งต่ออีก 10 นาที",
      "เดินไปหาอะไรกิน"
    ]
  },
  {
    text: "คุณรู้สึกยังไงเวลาอยู่คนเดียว?",
    choices: [
      "โคตรฟิน! ได้พัก",
      "ไม่โอเค ต้องหาอะไรทำ",
      "ได้นั่งคิดเยอะเลย",
      "เหงา แต่ใช้เวลาให้คุ้ม"
    ]
  },
  {
    text: "คุณมักถูกเพื่อนมองว่าเป็นคนแบบไหน?",
    choices: [
      "สายลุย ตัวแทนทีม",
      "ตลก คุยสนุก",
      "ชิลล์ ๆ เงียบแต่มีอะไร",
      "คูล มีคลาส ดูแพง"
    ]
  },
  {
    text: "เวลามีคนมาขอคำปรึกษา คุณมักจะ...",
    choices: [
      "วิเคราะห์แบบจริงจัง",
      "ฟังเฉย ๆ แล้วตอบว่า 'เออๆ'",
      "แนะนำอย่างมีสไตล์",
      "ให้กำลังใจแล้วชวนกินขนม"
    ]
  },
  {
    text: "คุณเลือกสัตว์เลี้ยงแบบไหน?",
    choices: [
      "หมาแอคทีฟ วิ่งเก่ง",
      "แมวขนฟู นอนเก่ง",
      "กระต่ายนุ่มนิ่ม ขี้อ้อน",
      "หมาพันธุ์กวน ๆ อย่างชิบะ"
    ]
  },
  {
    text: "เพลงโปรดของคุณแนวไหน?",
    choices: [
      "ร็อก/อัลเทอร์",
      "Lo-fi/Jazz ชิล ๆ",
      "อินดี้/ศิลป์ ๆ",
      "ป๊อปฮิตติดหู"
    ]
  },
  {
    text: "เลือกของว่างที่เป็นคุณที่สุด",
    choices: [
      "กาแฟดำไม่ใส่น้ำตาล",
      "ชานมไข่มุก",
      "ขนมปังปิ้งแฮนด์เมด",
      "มันฝรั่งทอด+โค้ก"
    ]
  },
  {
    text: "วันเกิดคุณ เพื่อนเซอร์ไพรส์ด้วยอะไร?",
    choices: [
      "ทริปลุยๆ แอดเวนเจอร์",
      "ปาร์ตี้เบาๆ ที่ร้านอาหาร",
      "เซ็ตของขวัญหรูๆ",
      "นัดนอนดู Netflix ที่บ้าน"
    ]
  },
  {
    text: "นิสัยข้อไหนตรงกับคุณที่สุด?",
    choices: [
      "กล้าตัดสินใจ",
      "อารมณ์ดีเป็นธรรมชาติ",
      "คิดเยอะ ละเอียด",
      "ไม่ค่อยซีเรียสกับอะไร"
    ]
  },
  {
    text: "วันหยุดคุณใส่ชุดแบบไหน?",
    choices: [
      "ชุดลุย ๆ พร้อมลุยตลาด",
      "ชุดนอนตัวเดิมทั้งวัน",
      "ชุดเรียบหรูแต่ดูดี",
      "เสื้อยืดกางเกงขาสั้น"
    ]
  },
  {
    text: "สถานที่ที่คุณอยากไปมากที่สุดคือ?",
    choices: [
      "ป่าเขา น้ำตก",
      "รีสอร์ทเงียบ ๆ วิวดี",
      "คาเฟ่ในเมืองญี่ปุ่น",
      "สวนสนุกหรือตลาดนัด"
    ]
  },
  {
    text: "คุณนิยามความสุขว่าอย่างไร?",
    choices: [
      "การได้ทำสิ่งที่ท้าทาย",
      "การได้พักโดยไม่ต้องคิดอะไร",
      "การได้อยู่ในบรรยากาศสวย ๆ",
      "การได้อยู่กับคนที่ทำให้ยิ้มได้"
    ]
  }
];

let currentQuiz = 0;


function startQuiz() {
    document.getElementById('s-container').style.display = 'none'; 
    document.getElementById('q-container').style.display = 'flex'; 
    showQuiz();
}

function showQuiz() {
    const q = quiz[currentQuiz]
    document.getElementById('quiz-text').textContent = q.text;

    const choiceDiv = document.getElementById('choice-container')
    choiceDiv.innerHTML = '';

    q.choices.forEach(choice => {
        const btn = document.createElement('button');
        btn.textContent = choice;
        btn.onclick = () => nextQuiz(choice)
        choiceDiv.appendChild(btn);
        btn.classList.add('choiceBtn')
    });
}

function nextQuiz (){
    currentQuiz ++;

    if(currentQuiz < quiz.length){
        showQuiz();
    }else{
        document.getElementById('q-container').innerHTML = `
        ดาวน์โหลดแอป Artivive เพื่อใช้สแกน (สแกนธรรมดาไม่ได้นะ!!)
        <img src="qr.png" class="qr" alt="qr">
        `;
    }

}