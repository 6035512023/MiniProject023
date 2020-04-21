import React, { Component } from "react";
import { MDBContainer, MDBCol, MDBRow, MDBCollapse, MDBCollapseHeader, MDBCard, MDBCardBody, MDBIcon } from "mdbreact";

class CollapsePage extends Component {
state={
  collapseID: "collapse1"
}

toggleCollapse = collapseID => () =>
this.setState(prevState => ({
  collapseID: prevState.collapseID !== collapseID ? collapseID : ""
}));

render() {
    return (
      <MDBContainer>
        <MDBCard
          className="card-image"
          style={{
            backgroundImage: `url(https://mdbootstrap.com/img/Photos/Horizontal/Work/4-col/img%20%2814%29.jpg)`
          }}
        >
          <div className="rgba-black-strong py-5 px-4">
            <MDBRow className="d-flex justify-content-center">
              <MDBCol md="10" xl="8">
                <MDBContainer className="accordion md-accordion accordion-5">
                  <MDBCard className="mb-4">
                    <MDBCollapseHeader
                      onClick={this.toggleCollapse("collapse1")}
                      className="p-0 z-depth-1"
                      tag="h4"
                      tagClassName="text-uppercase white-text mb-0 d-flex justify-content-start align-items-center"
                    >
                      <div
                        className="d-flex justify-content-center align-items-center mr-4"
                        style={{ backgroundColor: "#fff", minWidth: "100px" }}
                      >
                        <MDBIcon
                          icon="cloud"
                          size="2x"
                          className="m-3 black-text"
                        />
                      </div>
                      ANNOUNCE
                    </MDBCollapseHeader>

                    <MDBCollapse id="collapse1" isOpen={this.state.collapseID}>
                      <MDBCardBody className="rgba-black-light white-text z-depth-1">
                        <p className="p-md-4 mb-0">
                          เนื่องด้วยสถานการณ์ Covid-19 ทำให้ธุรกิจต่างๆต้องหยุดชั่วคราวหรือ
                          ปรับรูปแบบการทำงาน จึงเป็นผลให้ผู้คนต้องหยุดอยู่บ้าน ซึ่งในส่วนนี้มี
                          หลายคนเปิดร้านขายของออนไลน์กันมากขึ้น ไม่ว่าจะเป็นเครื่องใช้ต่างๆ 
                          เครื่องออกกำลังกาย รวมไปถึง อาหารต่างๆ แต่ไม่มีพื้นที่ในการโฆษณา
                          สินค้าของตัวเอง ทางผู้จัดทำจึงเขียนเว็บนี้ขึ้นมาเพื่อเป็นตัวช่วยในการโฆษณา
                          อีกหนึ่งทาง หากมีส่วนไหนที่ต้องปรับปรุงแก้ไข เราจะรับฟังและนำไปแก้ไข
                          ขอบคุณครับ
                        </p>
                        <p className="p-md-4 mb-0">
                          ติดตามข่าวสาร Covid-19 รายวัน : https://www.thairath.co.th/event_corona
                        </p>
                      </MDBCardBody>
                    </MDBCollapse>
                  </MDBCard>

                  <MDBCard className="mb-4">
                    <MDBCollapseHeader
                      onClick={this.toggleCollapse("collapse2")}
                      className="p-0 z-depth-1"
                      tag="h4"
                      tagClassName="text-uppercase white-text mb-0 d-flex justify-content-start align-items-center"
                    >
                    <div
                        className="d-flex justify-content-center align-items-center mr-4"
                        style={{ backgroundColor: "#fff", minWidth: "100px" }}
                      >
                      <MDBIcon
                        icon="comment-alt"
                        size="2x"
                        className="m-3 black-text"
                      />
                      </div>
                      CONTACT
                    </MDBCollapseHeader>

                    <MDBCollapse id="collapse2" isOpen={this.state.collapseID}>
                      <MDBCardBody className="rgba-black-light white-text z-depth-1">
                        <p className="p-md-4 mb-0">
                          Admin : SPIRIT_RIT
                        </p>
                        <p className="p-md-4 mb-0">
                          E-mail : pavaris_1999@hotmail.com
                        </p>
                        <p className="p-md-4 mb-0">
                          Facebook : Pavaris Apornwarangkool
                        </p>
                        <p className="p-md-4 mb-0">
                          Tel. : 090-2565419
                        </p>
                      </MDBCardBody>
                    </MDBCollapse>
                  </MDBCard>

                  <MDBCard className="mb-4">
                    <MDBCollapseHeader
                      onClick={this.toggleCollapse("collapse3")}
                      className="p-0 z-depth-1"
                      tag="h4"
                      tagClassName="text-uppercase white-text mb-0 d-flex justify-content-start align-items-center"
                    >
                    <div
                        className="d-flex justify-content-center align-items-center mr-4"
                        style={{ backgroundColor: "#fff", minWidth: "100px" }}
                      >
                      <MDBIcon
                        icon="cogs"
                        size="2x"
                        className="m-3 black-text"
                      />
                      </div>
                      PROBLEM
                    </MDBCollapseHeader>

                    <MDBCollapse id="collapse3" isOpen={this.state.collapseID}>
                      <MDBCardBody className="rgba-black-light white-text z-depth-1">
                        <p className="p-md-4 mb-0">
                          หากท่านกรอกข้อมูลผิดพลาด หรือมีปัญหาในการใช้งานอื่นๆในเว็บของเรา 
                          ผู้ใช้สามารถใช้ข้อมูลการติดต่อด้านบน ติดต่อเราเพื่อแก้ไขข้อมูลหรือปัญหา
                          การใช้งานของท่านได้
                        </p>
                      </MDBCardBody>
                    </MDBCollapse>
                  </MDBCard>
                </MDBContainer>
              </MDBCol>
            </MDBRow>
          </div>
        </MDBCard>
      </MDBContainer>
    );
  }
}

export default CollapsePage;