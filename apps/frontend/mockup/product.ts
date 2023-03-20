export type IProduct = {
  id: string;
  image: {
    src: string;
    alt: string;
  }[];
  name: string;
  description: string;
  price: number;
  productUrl: string;
  isFavorited: boolean;
};

export const products: IProduct[] = [
  {
    id: "1",
    image: [
      {
        src: "/assets/tmp/product10.png",
        alt: "test",
      },
      {
        src: "/assets/tmp/product11.png",
        alt: "test",
      },
    ],
    productUrl: "#",
    name: "กระชายขาวสกัด",
    description:
      "กระชายเป็นพืชสมุนไพรพื้นบ้านที่มีการใช้เป็นอาหารและยามานาน ภูมิปัญญาพื้นบ้านใช้แก้โรคที่เกิดในปาก เช่น ปากเปื่อย ปากเป็นแผล รักษาอาการจมูกไม่ได้กลิ่น ไซนัสอักเสบ ช่วยย่อยอาหาร เพิ่มสมรรถภาพทางเพศชองเพศชาย ยาอายุวัฒนะบำรุงกำลัง แก้ปวดเมื่อย แก้ลมวิงเวียน",
    price: 240,
    isFavorited: false,
  },
  {
    id: "2",
    image: [
      {
        src: "/assets/tmp/product11.png",
        alt: "test",
      },
      {
        src: "/assets/tmp/product11.png",
        alt: "test",
      },
    ],
    productUrl: "#",
    name: "ซีเคเอ็ม ยาบรรเทาอาการท้องผูก",
    description: "สรรพคุณ ยาระบาย บรรเทาอาการท้องผูก",
    price: 120,
    isFavorited: false,
  },
  {
    id: "3",
    image: [
      {
        src: "/assets/tmp/product12.png",
        alt: "test",
      },
    ],
    productUrl: "#",
    name: "แบลคมอร์ส วิตามิน ไบโอ ซี 1000 มก.",
    description:
      "วิตามิน ซี จะพบอยู่ร่วมกับไบโอฟลาโวนอยด์ในธรรมชาติ ซึ่งช่วยเพิ่มประสิทธิภาพของวิตามิน ซี ในร่างกาย โรสฮิพ และอะซีโรลาเป็นแหล่งของวิตามิน ซี ธรรมชาติ",
    price: 290,
    isFavorited: false,
  },
  {
    id: "4",
    image: [
      {
        src: "/assets/tmp/product5.png",
        alt: "test",
      },
    ],
    productUrl: "#",
    name: "ขาวละออ เถาวัลย์เปรียงชนิดเม็ด",
    description: "สรรพคุณ ลดอาการปวดเมื่อยตามร่างกาย",
    price: 130,
    isFavorited: true,
  },
  {
    id: "5",
    image: [
      {
        src: "/assets/tmp/product6.png",
        alt: "test",
      },
    ],
    productUrl: "#",
    name: "สปอร์เห็ดหลินจือ 60 แคปซูล",
    description:
      "ต่อต้านมะเร็ง บำรุงและฟื้นฟูไต เพิ่มภูมิคุ้มกันโรค เพิ่มการไหวเวียนของเลือด บำรุงหัวใจ",
    price: 135,
    isFavorited: false,
  },
  {
    id: "6",
    image: [
      {
        src: "/assets/tmp/product8.png",
        alt: "test",
      },
    ],
    description: ` 
          ตำรายาพื้นบ้าน: ใช้เถา ขับปัสสาวะ แก้บิด แก้หวัด
          ใช้เถาคั่วไฟให้หอมชงน้ำกินแก้ปวดเมื่อย แก้เส้นเอ็นพิการ
          แก้เมื่อยขบในร่างกาย แก้กระษัยเหน็บชา ต้มรับประทานถ่ายเส้น ถ่ายกระษัย
          แก้เส้นเอ็นขอด ถ่ายเสมหะ ไม่ถ่ายอุจจาระ เหมาะที่จะใช้ในโรคบิด ไอ หวัด
          ใช้ในเด็กได้ดี แก้ปวด แก้ไข้ ทำให้เส้นเอ็นอ่อนลง ขับปัสสาวะ
          แก้ปัสสาวะพิการ บางตำรากล่าวว่าทำให้มีกำลังดีแข็งแรงสู้ไม่ถอย
          เป็นสมุนไพรที่มีการนำมาใช้ในสูตรยาอบสมุนไพรเพื่อสุขภาพโดยใช้เป็นส่วนประกอบเพิ่มเติมจากสูตรยาอบสมุนไพรหลัก
          เมื่อต้องการอบเพื่อรักษาอาการปวดเมื่อย ปวดหลัง ปวดเอวเป็นต้น`,
    productUrl: "#",
    name: "ยาบำรุง",
    price: 123,
    isFavorited: false,
  },
  {
    id: "7",
    image: [
      {
        src: "/assets/tmp/product13.png",
        alt: "coffee",
      },
    ],
    description: `เลขทะเบียน อย. 11-1-08831-2-002
        ขนาดบรรจุ : 10 ซอง/กล่อง
        ส่วนประกอบ
        - Instant coffee powder (Arabica) (กาแฟอาราบิก้า)
        - Ginseng Extract (โสมสกัด)
        - Sucralose (สารให้ความหวานแทนน้ำตาล)- วิตามินหลายชนิดวิธีรับประทาน
        - ใช้กาแฟ 1 ซอง ต่อน้ำร้อน 1 ถ้วย (120 มล.)ใช้วัตถุที่ให้ความหวานแทนน้ำตาล`,
    isFavorited: false,
    price: 290,
    name: "คอฟฟี่ฟอร์ม กาแฟสำเร็จรูปพร้อมชง",
    productUrl: "#",
  },
  {
    id: "8",
    image: [
      {
        src: "/assets/tmp/swap-banner-product1-2.png",
        alt: "product back",
      },
      {
        src: "/assets/tmp/swap-banner-product1-1.png",
        alt: "product front",
      },
    ],
    isFavorited: false,
    price: 100,
    name: "กาแฟ",
    description: `มีฤทธิ์กระตุ้นระบบประมาทส่วนกลาง สมองตื่นตัวและกระปรี้กระเปร่า
                ช่วยเพิ่มประสิทธิภาพในการทำงาน ช่วยต้านอนุมูลอิสระ
                ช่วยลดปฏิกิริยาการอักเสบ ลดการเกิดภาวะหลอดเลือดแดงแข็ง
                ช่วยระบบเผาผลาญได้ดี`,
    productUrl: "#",
  },
  {
    id: "9",
    image: [
      {
        src: "/assets/tmp/swap-banner-product2-2.png",
        alt: "product back",
      },
      {
        src: "/assets/tmp/swap-banner-product2-1.png",
        alt: "product front",
      },
    ],
    isFavorited: false,
    price: 100,
    name: "แฮนดี้เฮิร์บ กระชายดำ",
    description: `ใช้บำรุงกำลัง ,แก้ปวดเมื่อยและอาการเหนื่อยล้า ,ช่วยเพิ่มสมรรถภาพทางเพศ ,ช่วยขับลมพิษ ,เป็นยาอายุวัฒนะ ,แก้จุกเสียด แก้ปวดท้อง โขลกกับเหล้าขาวคั้นน้ำดื่ม แก้โรคมดลูกพิการ มดลูกหย่อน
,ใช้กวาดคอเด็ก ,แก้โรคตานซางในเด็ก,ต้มดื่มแก้โรคตา ,ช่วยบำรุงฮอร์โมนเพศชาย ,บำรุงผิวพรรณของสตรีให้สดใส เปล่งปลั่ง ฟื้นฟูผิวให้สวยนุ่ม ,บำรุงประสาท`,
    productUrl: "#",
  },
];
