const Products = [
    {
      Name: "Lays",
      Price: 32,
      Description:
        "Lays STAX เลย์ สแตคส์ Mid Canister ขนมมันฝรั่งอบกรอบที่มาพร้อมกับความกรุบกรอบและรสชาติที่เข้มข้น เหมาะสำหรับทุกช่วงเวลาของการพักผ่อนและการแบ่งปันกับเพื่อนๆ",
      image:
        "https://media.allonline.7eleven.co.th/pdmain/669960-01-allonline-sm.jpg",
    },
    {
      Name: "Wink White Fiber Jelly",
      Price: 20,
      Description:
        "เจลลี่ไฟเบอร์ 4 สูตร ช่วยขับถ่าย ลดอาการท้องผูก พร้อมส่วนผสมจากธรรมชาติที่ช่วยในการย่อยอาหาร เหมาะสำหรับคนที่ใส่ใจสุขภาพในทุกมื้ออาหาร",
      image:
        "https://image.makewebcdn.com/makeweb/m_1920x0/tRb5oCGT0/DefaultData/COVER_JA.png",
    },
    {
      Name: "Oishi Green Tea",
      Price: 45,
      Description:
        "โออิชิ กรีนที ชาข้าวญี่ปุ่น ขนาด 500 มล. ที่ให้รสชาติชาหอมกรุ่นและกลิ่นข้าวญี่ปุ่นสดใหม่ เติมความสดชื่นและช่วยให้รู้สึกผ่อนคลายตลอดวัน",
      image:
        "https://3auntiesthaimarket.com/cdn/shop/products/ScreenShot2022-02-28at16.32.10_530x@2x.png?v=1646084127",
    },
    {
      Name: "Milo UHT",
      Price: 25,
      Description:
        "ไมโล ยูเอชที รสช็อกโกแลต 180 มล. เครื่องดื่มช็อกโกแลตที่ให้พลังงานสูง อุดมไปด้วยวิตามินและแร่ธาตุ เหมาะสำหรับเติมพลังในทุกช่วงของวัน",
      image:
        "https://image.makewebcdn.com/makeweb/m_1920x0/ABTbZXpZi/DefaultData/%E0%B9%84%E0%B8%A1%E0%B9%82%E0%B8%A5.jpg",
    },
    {
      Name: "Nestle Pure Life",
      Price: 18,
      Description:
        "น้ำดื่มเนสท์เล่ เพียวไลฟ์ 600 มล. น้ำดื่มบริสุทธิ์ที่ผ่านการกรองอย่างพิถีพิถัน เหมาะสำหรับการดื่มในทุกโอกาส เพื่อเติมความสดชื่นให้ร่างกายตลอดทั้งวัน",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRL1tgmEYpHTAfI3sOTdedytLVoFEITgPH-GQ&s",
    },
    {
      Name: "Mama Instant Noodles",
      Price: 12,
      Description:
        "มาม่า บะหมี่กึ่งสำเร็จรูปรสต้มยำกุ้ง 55 กรัม ที่มาพร้อมรสชาติอันจัดจ้านและเครื่องปรุงที่เข้มข้น เหมาะสำหรับมื้อเร่งด่วนที่อร่อยและง่ายดาย",
      image:
        "https://i.ebayimg.com/images/g/Q~AAAOSwaQhkrVxW/s-l1200.jpg",
    },
    {
      Name: "Pepsi",
      Price: 40,
      Description:
        "เป๊ปซี่ น้ำอัดลมรสโคล่า ขนาด 1.5 ลิตร ให้ความซ่าสดชื่นแบบคลาสสิก เติมพลังและเพิ่มความสนุกในทุกมื้ออาหาร",
      image:
        "https://st.bigc-cs.com/cdn-cgi/image/format=webp,quality=85/public/media/catalog/product/77/88/8858998571277/8858998571277_1-20240927093814-.jpg",
    },
    {
      Name: "Dutch Mill Yogurt",
      Price: 35,
      Description:
        "โยเกิร์ตพร้อมดื่มดัชมิลล์ 400 มล. รสชาติหวานอมเปรี้ยว อุดมด้วยจุลินทรีย์ที่ดีต่อระบบทางเดินอาหาร ให้คุณสุขภาพดีทุกวัน",
      image:
        "https://aeoncambodia.sgp1.digitaloceanspaces.com/image/catalog/product/8851717020087-b.jpg",
    },
    {
      Name: "Wall's Magnum Almond",
      Price: 50,
      Description:
        "ไอศกรีมวอลล์ แม็กนั่ม อัลมอนด์ ไอศกรีมพรีเมียมเคลือบช็อกโกแลตหนาและโรยอัลมอนด์ชิ้นโต เหมาะสำหรับการเติมเต็มความสุขในวันพักผ่อน",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqk80jHp6vIki-JrbcvlmHhJg3bN80LvEGtQ&s",
    },
    {
      Name: "Meiji Fresh Milk",
      Price: 85,
      Description:
        "นมสดเมจิ รสจืด 2 ลิตร นมสดคุณภาพสูงจากฟาร์มโคนมที่ได้มาตรฐาน เหมาะสำหรับการดื่มตรงหรือใช้เป็นส่วนผสมในเมนูโปรดของคุณ",
      image:
        "https://st.bigc-cs.com/cdn-cgi/image/format=webp,quality=90/public/media/catalog/product/12/88/8850329102112/8850329102112_1.jpg",
    }
  ];
  
    
  export default Products;