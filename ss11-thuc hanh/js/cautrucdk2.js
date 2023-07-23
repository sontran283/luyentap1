
    Bài 1: Chuyển từ độ C sang độ F.</h3 >
    //         <p>C / 5 = (F - 32) / 9</p>
    //         let doC = +prompt("bai 1-nhap so")
    //         console.log(doC);
    //         let doF = (doC * 9 / 5) + 32;
    //         console.log(doF);
    //         console.log(c + "do C = " + f + "do F");


    //         let c = +prompt("hay nhap do c");
    //         let f = (c * (9 / 5)) + 32;
    //         document.write(c + "do C = " + f + "do F");




    Bài 2: Chuyển từ mét sang feet</h3 >
        //         <p>ft =m * 3.2808</p>
        //         let met = prompt("bai 2-nhap sp met vao day");
        //         let ft = (met * 3.2808);
        //         document.write("feet bang", ft)





        Bài 3: Tính diện tích hình vuông khi biết cạnh a.</h3 >
            //         <p>cong thuc tinh dien tich hinh vuong : (S = a^2 ) </p> 
            //         let a = +prompt("bai 3-nhap vao so bat ky");
            //         let Shinhvuong = (a * a);
            //         document.write("dien tich cua hinh vuong bang", Shinhvuong)





            Bài 4: Tính diện tích hình chữ nhật khi biết 2 cạnh a, b</h3 >
                //     <p>cong thuc tinh dien tich hinh chu nhat : (S = a * b) </p>    
                //         let a = +prompt("bai 4-nhap chieu dai canh a");
                //         let b = +prompt("nhap chieu dai canh b");
                //         let Shinhchunhat = (a * b);
                //         document.write("dien tich hinh chu nhat bang", Shinhchunhat)



                Bài 5: Tính diện tích tam giác vuông khi biết 2 cạnh kề a, b</h3 >
                    //     <p>cong thuc tinh : {S =0.5*(a*b) }</p>   
                    //         let a = +prompt("bai 5-nhap chieu dai canh a");
                    //         let b = +prompt("nhap chieu dai canh b");
                    //         let Shinhtamgiacvuong = (0.5 * (a * b));
                    //         document.write("dien tich hinh tam giac vuong la", Shinhtamgiacvuong)




                    Bài 6: Giải phương trình bậc 1</h3 >
                        //     <p>phương trình bậc 1 có dạng : ( ax + b=0 ) or ( x = -b/a ) </p>
                        //     
                        //         let a1 = +prompt("bai 6-nhap mot so bat ky cua a1");
                        //         let b1 = +prompt("nhap mot so bat ky cua b1");
                        //         if (a1 == 0 && b1 == 0) {
                        //             document.write("phuong trinh vo nghiem");
                        //         } else if (a1 != 0 && b1 == 0) {
                        //             document.write('Phương trình có nghiệm x = 0');
                        //         } else if (a1 == 0 && b1 != 0) {
                        //             document.write("Phương trình vô nghiệm");
                        //         } else {
                        //             document.write('Phương trình có nghiệm x = ' + (-b1 / a1));
                        //         }






                        Bài 7: Giải phương trình bậc 2.</h3 >
                            // <p>cong thuc : (ax2 + bx + c = 0) </p>
                            //     let a = +prompt("nhap so bat ky")
                            //     let b = +prompt("nhap so bat ky")
                            //     let c = +prompt("nhap so bat ky")
                            //     if (a !== 0) {
                            //         let delta = (b * b) - (4 * a * c)
                            //         if (delta < 0) {
                            //             document.write("phuong trinh vo nghiem");
                            //         } else if (delta = 0) {
                            //             let x = -b / (2 * a)
                            //             document.write("phuong trinh co nghiem kep x1+x2=" + x);
                            //         } else {
                            //             let x1 = (-b + Math.sqrt(delta)) / (2 * a);
                            //             let x2 = (-b - Math.sqrt(delta)) / (2 * a);
                            //             document.write("phuong trinh co nghiem x1=" + x1)
                            //             document.write("phuong trinh co nghiem x2=" + x2)
                            //         }
                            //     }




                            Bài 8: Kiểm tra xem một số nhập vào có phải là tuổi của một người không</h3 >
                                //     <p>Một số nguyên là tuổi của một người khi nhỏ 120 và lớn hơn 0</p>  
                                //         let age = +prompt("bai 8-hay nhap so tuoi");
                                //         if (age >= 0 && age <= 120) {
                                //             console.log('dieu kien dung');
                                //         } else {
                                //             console.log('dieu kien sai');
                                //         }




                                Bài 9: Kiểm tra xem 3 số thực(a, b, c) nhập vào có phải là cạnh của một tam giác.Điều kiện để a, b, c là cạnh của
    //         một tam giac</h3>  
    //         let a = +prompt("bai 9-hay nhap so");
    //         let b = +prompt("hay nhap so");
    //         let c = +prompt("hay nhap so");
    //         let canh1 = a > 0 && b > 0 && c > 0;
    //         let canh2 = (a + b > c) && (b + c > a) && (a + c > b);
    //         if (canh1 && canh2)
    //             if (a > 0 && b > 0 && c > 0 && (a + b > c) && (b + c > a) && (a + c > b)) {
    //                 document.write("3 canh tao thanh 1 tam giac");
    //             } else {
    //                 document.write("3 canh khong tao thanh 1 tam giac");
    //             }
       


    
    Bài 10: Viết chương trình tính giá điện.</h3 >
    // <p>Coogn thức tính theo Biểu giá bán lẻ điện sinh hoạt</p> 

    //     let a = +prompt("hay nhap so dien")
    //     let x;
    //     if (a <= 50) {
    //         x = a * 1678;
    //     } else if (a <= 100) {
    //         x = ((a - 50) * 1734) + (50 * 1678);
    //     } else if (a <= 200) {
    //         x = ((a - 100) * 2014) + (50 * 1678) + (50 * 1734);
    //     } else if (a <= 300) {
    //         x = ((a - 200) * 2536) + (50 * 1678) + (50 * 1734) + (100 * 2014);
    //     } else if (a <= 400) {
    //         x = ((a - 300) * 2834) + (50 * 1678) + (50 * 1734) + (100 * 2014) + (100 * 2536);
    //     } else {
    //         x = ((a - 400) * 2927) + (50 * 1678) + (50 * 1734) + (100 * 2014) + (100 * 2536) + (100 * 2834);
    //     }
    //     document.write(`Giá điện bán lẻ là ${x} đồng`);





    Bài 11: Viết chương trình tính thuế thu nhập cá nhân</h3 >
        //     let vat = +prompt("hay nhap vat");
        //     if (vat <= 5) {
        //         document.write("so tien ban phai nop la 5tr");
        //     } else if (vat <= 10) {
        //         document.write("so tien ban phai nop la Trên 5 đến 10tr");
        //     } else if (vat <= 15) {
        //         document.write("so tien ban phai nop la Trên 10 đến 18tr");
        //     } else if (vat <= 20) {
        //         document.write("so tien ban phai nop la Trên 18 đến 32tr");
        //     } else if (vat <= 25) {
        //         document.write("so tien ban phai nop la Trên 32 đến 52tr");
        //     } else if (vat <= 30) {
        //         document.write("so tien ban phai nop la Trên 52 đến 80tr");
        //     } else if (vat <= 35) {
        //         document.write("so tien ban phai nop la Trên 80tr");
        //     }




        Bài 12: Viết chương trình tính lãi ngân hàng khi biết số tiền ban đầu, số tháng cho vay và lãi suất hàng tháng
    //     let sotienbandau = +prompt("hay nhap so tien ban dau");
    //     let thoihanvay = +prompt("hay nhap thoi han cho vay");
    //     let laixuatvay = +prompt("hay nhap lai xuat vay");
    //     let tiengoctrahangthang = (+sotienbandau / thoihanvay);
    //     let teinlaitrhangthang = (+(sotienbandau * laixuatvay) / thoihanvay);
    //     let total = (+tiengoctrahangthang + teinlaitrhangthang);
    //     document.write("Số tiền phải trả hàng tháng (cả gốc và lãi) là", total)
   


    
    bai 13 :may tinh don gian  ss9 - bt8
    //     let a = +prompt("moi ban nhap vao so a");
    //     let b = +prompt("moi ban nhap vao so b");
    //     let xxx = prompt("nhap dau phep tinh \(\*,\+,\-\,\/,\)");
    //     let rs;
    //     switch (xxx) {
    //         case "/":
    //             if (b == 0) {
    //                 alert("khong the chia 1 so cho 0")
    //             } else {
    //                 rs = a / b
    //                 break;
    //             }
    //         case "+":
    //             rs = a + b
    //             break;
    //         case "-":
    //             rs = a - b
    //             break;
    //         case "*":
    //             rs = a * b
    //             break;
    //     }
    //     alert(`ket qua cua phep tinh tren la :  a ${xxx} b = ${rs}`)
   



    bai 14 : Ứng dụng tìm cung hoàng đạ0
    //     let date = parseInt(prompt("Nhập ngày vào: "))
    //     let month = parseInt(prompt("Nhập tháng vào: "))
    //     switch (month) {
    //         case 1:
    //             if (date <= 19) {
    //                 alert("Bạn thuộc cung Ma Kết");
    //             } else {
    //                 alert("Bạn thuộc cung Bảo Bình");
    //             }
    //             break;
    //         case 2:
    //             if (date <= 18) {
    //                 alert("Bạn thuộc cung Bảo Bình");
    //             } else {
    //                 alert("Bạn thuộc cung Song Ngư");
    //             }
    //             break;
    //         case 3:
    //             if (date <= 20) {
    //                 alert("Bạn thuộc cung Song Ngư");
    //             } else {
    //                 alert("Bạn thuộc cung Bạch Dương");
    //             }
    //             break;
    //         case 4:
    //             if (date <= 19) {
    //                 alert("Bạn thuộc cung Bạch Dương");
    //             } else {
    //                 alert("Bạn thuộc cung Kim Ngưu");
    //             }
    //             break;
    //         case 5:
    //             if (date <= 20) {
    //                 alert("Bạn thuộc cung Kim Ngưu");
    //             } else {
    //                 alert("Bạn thuộc cung Song Tử");
    //             }
    //             break;
    //         case 6:
    //             if (date <= 21) {
    //                 alert("Bạn thuộc cung Song Tử");
    //             } else {
    //                 alert("Bạn thuộc cung Cự Giải");
    //             }
    //             break;
    //         case 7:
    //             if (date <= 22) {
    //                 alert("Bạn thuộc cung Cự Giải");
    //             } else {
    //                 alert("Bạn thuộc cung Sư Tử");
    //             }
    //             break;
    //         case 8:
    //             if (date <= 22) {
    //                 alert("Bạn thuộc cung Sư Tử");
    //             } else {
    //                 alert("Bạn thuộc cung Xử Nữ");
    //             }
    //             break;
    //         case 9:
    //             if (date <= 22) {
    //                 alert("Bạn thuộc cung Xử Nữ");
    //             } else {
    //                 alert("Bạn thuộc cung Thiên Bình");
    //             }
    //             break;
    //         case 10:
    //             if (date <= 23) {
    //                 alert("Bạn thuộc cung Thiên Bình");
    //             } else {
    //                 alert("Bạn thuộc cung Hổ Cáp");
    //             }
    //             break;
    //         case 11:
    //             if (date <= 21) {
    //                 alert("Bạn thuộc cung Hổ Cáp");
    //             } else {
    //                 alert("Bạn thuộc cung Nhân Mã");
    //             }
    //             break;
    //         case 12:
    //             if (date <= 21) {
    //                 alert("Bạn thuộc cung Nhân Mã");
    //             } else {
    //                 alert("Bạn thuộc cung Ma Kết");
    //             }
    //             break;
    //         default:
    //             alert("Ngày - Tháng không hợp lệ")
    //     }
