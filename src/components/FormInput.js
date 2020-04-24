import React, { useState, useEffect } from 'react';
import {
MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBFormInline,
MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem
} from "mdbreact";
import { TabContent, TabPane, Nav, NavItem, NavLink, Button, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import 'bootstrap/dist/css/bootstrap.min.css';
import { firestore } from '../index'
import AppBar from '@material-ui/core/AppBar';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import Topbar from './Topbar';
import Store from './Store';
import './FromInput.css'


 const FormInput = props => {

    const [id,setId] = useState(0)
    const [imgUrl1, SetImgUrl1] = useState('')
    const [productName, SetProductName] = useState('')
    const [price, SetPrice] = useState('')
    const [detail, SetDetail] = useState('')
    const [nameUser, setNameUser] = useState('')
    const [telephone, setTelephone] = useState('')
    const [facebook, setFacebook] = useState('')
    const [line, setLine] = useState('')
    const [store, SetStore] = useState([{}])

    useEffect(() => {

        retriveData()

    }, [])

    const retriveData = () => {

        firestore.collection("store").onSnapshot(snapshot => {

            console.log(snapshot);

            let myStore = snapshot.docs.map(d => {
                const { id, imgUrl1, productName, price, detail,  nameUser, telephone, facebook, line } = d.data()
                console.log(id, imgUrl1, productName, price, detail,  nameUser, telephone, facebook, line)
                return {id, imgUrl1, productName, price, detail,  nameUser, telephone, facebook, line}
            })

            SetStore(myStore)
          

        })
    }

    const renderStore = () => {
        console.log(store)
        if (store && store.length) {
            return store.map((store, index) => {
                return (
                    <Store key={index} store={store}/>
                )
            })
        }

        else {
            return <li>No store</li>
        }
    }

    const addStore = () => {

        let id = (store.length === 0) ? 1 : store[store.length - 1].id + 1
        firestore.collection("store").doc(id + '').set({ id, imgUrl1, productName, price, detail,  nameUser, telephone, facebook, line})
        alert("You Add Finish")
    }

    const [activeTab, setActiveTab] = useState('1');

    const toggle = tab => {
        if (activeTab !== tab) setActiveTab(tab);
    }

    return (
        <div>
            <Topbar />
            <MDBNavbar color="cyan" dark expand="md">
                <MDBNavbarBrand>
                    <strong className="black-text">กรอกข้อมูลสินค้า</strong>
                </MDBNavbarBrand>
            </MDBNavbar>
            <div className="cc">
            
            <div>
            <TabContent activeTab={activeTab}>
            <TabPane tabId="1">
                <Row>
                    <Col sm="12">
                        <div>
                            <div>
                                <div className="col-6 mt-5 mx-auto card">
                                    <form>
                                        <div className="form-group">
                                            <label htmlFor="imgUrl1">URL IMAGE : ใส่ลิงค์รูปภาพของสินค้า</label>
                                                <input type="text"
                                                    name="imgUrl1"
                                                    className="form-control"
                                                    id="imgUrl1"
                                                    onChange={(e) => SetImgUrl1(e.target.value)} 
                                                />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="product">PRODUCT NAME : ชื่อสินค้า</label>
                                            <input type="text"
                                                    name="product"
                                                    className="form-control"
                                                    id="product"
                                                    onChange={(e) => SetProductName(e.target.value)} 
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="price">PRICE : ราคา</label>
                                            <input type="text"
                                                    name="price"
                                                    className="form-control"
                                                    id="price"
                                                    onChange={(e) => SetPrice(e.target.value)}  
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="detail">DETAIL : รายละเอียด</label>
                                            <input type="text"
                                                    name="detail"
                                                    className="form-control"
                                                    id="detail"
                                                    onChange={(e) => SetDetail(e.target.value)} 
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="nameUser">USER NAME : ชื่อผู้ขายสินค้า</label>
                                            <input type="text"
                                                    name="nameUser"
                                                    className="form-control"
                                                    id="nameUser"
                                                    onChange={(e) => setNameUser(e.target.value)}  
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="telephone">Telephone : เบอร์โทรติดต่อ</label>
                                            <input type="text"
                                                    name="telephone"
                                                    className="form-control"
                                                    id="telephone"
                                                    onChange={(e) => setTelephone(e.target.value)} 
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="facebook">Facebook</label>
                                            <input type="text"
                                                    name="facebook"
                                                    className="form-control"
                                                    id="facebook"
                                                    onChange={(e) => setFacebook(e.target.value)}  
                                            />
                                        </div>
                                        <div className="form-group">
                                                <label htmlFor="line">Line</label>
                                                <input type="text"
                                                    name="line"
                                                    className="form-control"
                                                    id="line"
                                                    onChange={(e) => setLine(e.target.value)} 
                                        />
                                        </div>
                                    </form>
                                    <div className="text-center">
                                        <Button color="primary" style={{ margin:20, padding: 10}} onClick={addStore}>ADD</Button>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </Col>
                </Row>
            </TabPane>
        </TabContent>
            </div>        
            
                
        </div>
        </div>
        
    );
}

export default FormInput;