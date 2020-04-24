import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardUp, MDBAvatar, MDBCardBody, MDBIcon } from "mdbreact";

const Admin = () => {
  return (
      <div className="container">
         
      <section className="text-center my-5">
        <div >
          <h2 className="h1-responsive font-weight-bold my-5">
          PickMe
        </h2>
        <p className="dark-grey-text w-responsive mx-auto mb-5">
        เนื่องด้วยสถานการณ์ Covid-19 ทำให้ธุรกิจต่างๆต้องหยุดชั่วคราวหรือ
        ปรับรูปแบบการทำงาน จึงเป็นผลให้ผู้คนต้องหยุดอยู่บ้าน ซึ่งในส่วนนี้มี
        หลายคนเปิดร้านขายของออนไลน์กันมากขึ้น ไม่ว่าจะเป็นเครื่องใช้ต่างๆ 
        เครื่องออกกำลังกาย รวมไปถึง อาหารต่างๆ แต่ไม่มีพื้นที่ในการโฆษณา
        สินค้าของตัวเอง ทางผู้จัดทำจึงเขียนเว็บนี้ขึ้นมาเพื่อเป็นตัวช่วยในการโฆษณา
        อีกหนึ่งทาง หากมีส่วนไหนที่ต้องปรับปรุงแก้ไข เราจะรับฟังและนำไปแก้ไข
        ขอบคุณครับ

        </p>
        <br />
        <p className="dark-grey-text w-responsive mx-auto mb-5">
        หากท่านกรอกข้อมูลผิดพลาด หรือมีปัญหาในการใช้งานอื่นๆในเว็บของเรา 
        ผู้ใช้สามารถใช้ข้อมูลการติดต่อด้านล่าง ติดต่อเราเพื่อแก้ไขข้อมูลหรือปัญหา
        การใช้งานของท่านได้
        </p>
        </div>
        
        
          <div className="rowrow">
          <MDBContainer style={{display: 'flex' , justifyContent: 'center'}}>

              <MDBCol lg="4" md="6" className="mb-lg-0 mb-4">
            <MDBCard testimonial>
                <img
                  src="https://scontent.fbkk4-3.fna.fbcdn.net/v/t1.0-9/90190718_2579193565702292_2002935887997960192_o.jpg?_nc_cat=100&_nc_sid=09cbfe&_nc_eui2=AeGv6Ku5JWZloXXNy4GRNjLAajZj47G34mhqNmPjsbfiaIRmdNSiYN6am7qbfP4zaWsyBdoaXX6uFBpDUFSti1qj&_nc_ohc=L1cu_1K2-tkAX8bInHa&_nc_ht=scontent.fbkk4-3.fna&oh=e928b2d0f3a2daf861143f4831f2c6a4&oe=5EC76846"
                  alt=""
                  className="rounded-circle img-fluid"
                />
              <MDBCardBody>
                <h4 className="font-weight-bold mb-4">Admin</h4>
                <hr />
                <h5 className="dark-grey-text mt-4">
                  Pavaris Apornwarangkool
                </h5>
                <p className="dark-grey-text mt-4">
                  6035512023
                </p>
                <p className="p-md-4 mb-0">
                    E-mail : 6035512023@psu.aca.th
                </p>
                <p className="p-md-4 mb-0">
                    Facebook : Pavaris Apornwarangkool
                </p>
                <p className="p-md-4 mb-0">
                Tel. : 090-2565419
                </p>
                    </MDBCardBody>
                </MDBCard>
            </MDBCol>
            </MDBContainer>
          </div>
      </section>
    
      </div>
    
  );
}

export default Admin;