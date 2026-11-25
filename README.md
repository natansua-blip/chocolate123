# Bar Nine — แลนดิ้งเพจช็อกโกแลตแท่ง

โครงสร้าง: `index.html` (หน้าขาย+ฟอร์มสั่งซื้อ) · `pack.html` (ใบหยิบ+ใบปะหน้า) · `apps-script.gs` · `images/` (รูปสินค้า แยกโฟลเดอร์)

## ขั้นตอน
1. สร้าง Google Sheet 2 แท็บ ชื่อ `Products` และ `Orders` ตามหัวคอลัมน์ในไฟล์ `apps-script.gs` (ใส่สินค้า ≥ 2 SKU)
2. Extensions → Apps Script วางโค้ด `apps-script.gs` แก้ `ADMIN_KEY` → Deploy → Web app (Execute as: Me, Access: Anyone) แล้วคัดลอก URL
3. วาง URL ที่ `API` ใน `index.html` และ `pack.html`
4. ใส่รูปจริงในโฟลเดอร์ `images/` แล้วระบุ path ในคอลัมน์ image ของชีต
5. push ขึ้น GitHub → Vercel: Add New Project → เลือก repo → Deploy (Framework: Other)
6. ใช้งานจริง: เปิด `/pack.html` ใส่รหัสแอดมิน ดูใบหยิบ แล้วพิมพ์ใบปะหน้า; เปลี่ยนสถานะเป็น `packed` ในชีตเมื่อแพ็กเสร็จ
