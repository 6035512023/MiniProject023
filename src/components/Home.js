import React from 'react'
import fire from '../config/fire'
import Topbar from './Topbar';
import './Home.css';
import { Carousel, Card, toggleCollapse } from 'react-bootstrap';
import {MDBRow, MDBCol,MDBContainer} from "mdbreact";
import Admin from './Admin';


const Home = () => {

     const logout = () => {

         fire.auth().signOut();
     }

    return(
    <div className="back1">
             
             
                <Topbar />
                <div className="photobox">
                <MDBContainer>
                    <div className="row1">
                        <MDBCol md="12" className="mb-3">
                            <img src="https://scontent.fbkk3-3.fna.fbcdn.net/v/t1.15752-9/94217665_852621065257932_3418224476427386880_n.jpg?_nc_cat=105&_nc_sid=b96e70&_nc_eui2=AeEh17PIlLGgl5ziiRcF6IwA4tHzD5W2mBbi0fMPlbaYFkjfYgLBH-ehothmUJZSIvO0Wszo9ZcfXmDzKQa_CR0i&_nc_ohc=98o46PD5jNsAX-Bfcjv&_nc_ht=scontent.fbkk3-3.fna&oh=70bc913de7d2fe8d387b3e2f6c3a94fb&oe=5ECA85C3" className="img-fluid z-depth-1" alt="" />
                        </MDBCol>
                    </div>
                    <MDBRow>
                        <MDBCol lg="3" md="12" className="mb-3">
                            <img src="https://scontent.fbkk3-3.fna.fbcdn.net/v/t1.15752-9/94217665_852621065257932_3418224476427386880_n.jpg?_nc_cat=105&_nc_sid=b96e70&_nc_eui2=AeEh17PIlLGgl5ziiRcF6IwA4tHzD5W2mBbi0fMPlbaYFkjfYgLBH-ehothmUJZSIvO0Wszo9ZcfXmDzKQa_CR0i&_nc_ohc=98o46PD5jNsAX-Bfcjv&_nc_ht=scontent.fbkk3-3.fna&oh=70bc913de7d2fe8d387b3e2f6c3a94fb&oe=5ECA85C3" className="img-fluid z-depth-1" alt="" />
                        </MDBCol>
                        <MDBCol lg="3" md="6" className="mb-3">
                            <img src="https://scontent.fbkk3-3.fna.fbcdn.net/v/t1.15752-9/94217665_852621065257932_3418224476427386880_n.jpg?_nc_cat=105&_nc_sid=b96e70&_nc_eui2=AeEh17PIlLGgl5ziiRcF6IwA4tHzD5W2mBbi0fMPlbaYFkjfYgLBH-ehothmUJZSIvO0Wszo9ZcfXmDzKQa_CR0i&_nc_ohc=98o46PD5jNsAX-Bfcjv&_nc_ht=scontent.fbkk3-3.fna&oh=70bc913de7d2fe8d387b3e2f6c3a94fb&oe=5ECA85C3" className="img-fluid z-depth-1" alt="" />
                        </MDBCol>
                        <MDBCol lg="3" md="6" className="mb-3">
                            <img src="https://scontent.fbkk3-3.fna.fbcdn.net/v/t1.15752-9/94217665_852621065257932_3418224476427386880_n.jpg?_nc_cat=105&_nc_sid=b96e70&_nc_eui2=AeEh17PIlLGgl5ziiRcF6IwA4tHzD5W2mBbi0fMPlbaYFkjfYgLBH-ehothmUJZSIvO0Wszo9ZcfXmDzKQa_CR0i&_nc_ohc=98o46PD5jNsAX-Bfcjv&_nc_ht=scontent.fbkk3-3.fna&oh=70bc913de7d2fe8d387b3e2f6c3a94fb&oe=5ECA85C3" className="img-fluid z-depth-1" alt="" />
                        </MDBCol>
                        <MDBCol lg="3" md="6" className="mb-3">
                            <img src="https://scontent.fbkk3-3.fna.fbcdn.net/v/t1.15752-9/94217665_852621065257932_3418224476427386880_n.jpg?_nc_cat=105&_nc_sid=b96e70&_nc_eui2=AeEh17PIlLGgl5ziiRcF6IwA4tHzD5W2mBbi0fMPlbaYFkjfYgLBH-ehothmUJZSIvO0Wszo9ZcfXmDzKQa_CR0i&_nc_ohc=98o46PD5jNsAX-Bfcjv&_nc_ht=scontent.fbkk3-3.fna&oh=70bc913de7d2fe8d387b3e2f6c3a94fb&oe=5ECA85C3" className="img-fluid z-depth-1" alt="" />
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
                </div>
                <div className="boxcolor">
                    <div className="row1">
                        <h2 className=" my-3">
                            PickMe
                        </h2>
                        <p className="orange-text  mb-2">
                        เนื่องด้วยสถานการณ์ Covid-19 ทำให้ธุรกิจต่างๆต้องหยุดชั่วคราวหรือ
                        ปรับรูปแบบการทำงาน จึงเป็นผลให้ผู้คนต้องหยุดอยู่บ้าน ซึ่งในส่วนนี้มี
                        หลายคนเปิดร้านขายของออนไลน์กันมากขึ้น ไม่ว่าจะเป็นเครื่องใช้ต่างๆ 
                        เครื่องออกกำลังกาย รวมไปถึง อาหารต่างๆ แต่ไม่มีพื้นที่ในการโฆษณา
                        สินค้าของตัวเอง ทางผู้จัดทำจึงเขียนเว็บนี้ขึ้นมาเพื่อเป็นตัวช่วยในการโฆษณา
                        อีกหนึ่งทาง หากมีส่วนไหนที่ต้องปรับปรุงแก้ไข เราจะรับฟังและนำไปแก้ไข
                        ขอบคุณครับ
                        </p>
                        <p className="orange-text  mb-5">
                        หากท่านกรอกข้อมูลผิดพลาด หรือมีปัญหาในการใช้งานอื่นๆในเว็บของเรา 
                        ผู้ใช้สามารถใช้ข้อมูลการติดต่อด้านล่าง ติดต่อเราเพื่อแก้ไขข้อมูลหรือปัญหา
                        การใช้งานของท่านได้
                        </p>
                        
                    </div>
                </div>
                
                <div className="row1">
                        <Admin />
                    </div>
                
                
    </div>

        
    )
}

export default Home;