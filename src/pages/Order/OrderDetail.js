import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { Divider, Button } from "antd";
import { isEmpty } from "lodash";
import { useParams, Redirect } from "react-router-dom";
import useTitle from "../../hooks/useTitle";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import orderApi from "../../apis/orderApi";
import response from "../../constants/response";
import { formatPrice, formatPhone } from "./../../helpers/formats";
import { path } from "../../constants/path";
import WaveTopBottomLoading from "./../../components/Loading/WaveTopBottomLoading";
import * as PATH_URL from "../../constants/apiUrl";
import useDownload from "../../hooks/useDownload";
import { DownloadOutlined } from "@ant-design/icons";

function OrderDetail() {
  const { code } = useParams();
  const { id } = useParams();
  const [order, setOrder] = useState({});
  const [user, setUser] = useState({});
  const [shipping, setShipping] = useState({});
  const [products, setProducts] = useState([]);
  const [productPrice, setProductPrice] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [couponPrice, setCouponPrice] = useState(0);
  const [feeshipPrice, setFeeshipPrice] = useState(25000);
  const [redirectOrder, setRedirectOrder] = useState(false);
  const [keyOrder, setKeyOrder] = useState("");

  const [downloadFile, isDownloading, initFetch] = useDownload(
    keyOrder,
    "order_detail",
    "pdf"
  );

  useTitle("Order Detail");

  useEffect(() => {
    orderApi
      .getOrderDetail({ code })
      .then((res) => {
        if (res.status === response.SUCCESS) {
          const order = res.data;

          const {
            user,
            shipping,
            product_money,
            total_money,
            coupon_money,
            feeship_money,
            order_details: products,
          } = order;

          setTotalPrice(parseInt(total_money));
          setOrder(order);
          setUser(user);
          setCouponPrice(parseInt(coupon_money));
          setFeeshipPrice(parseInt(feeship_money));
          setProductPrice(parseInt(product_money));
          setShipping(shipping);
          setProducts(products);

          setKeyOrder(
            PATH_URL.EXPORT_PDF_ORDER +
              new Buffer(
                `${order.id}--${order.code}--${order.user_id}--${order.time}`
              ).toString("base64")
          );

          if (order.coupon !== null) {
            setCouponPrice(
              parseInt(order.total_order * (order.coupon.percent / 100))
            );
          }

          if (order.feeship !== null) {
            setFeeshipPrice(parseInt(order.feeship.feeship));
          }
        } else {
          setRedirectOrder(true);
        }
      })
      .catch((err) => {});
  }, [id, code]);

  if (redirectOrder) {
    return <Redirect to={path.ORDER_LIST} />;
  }

  return (
    <>
      <Breadcrumb title="Order Details" parent="Order" />
      <div className="container-fluid">
        <div className="card">
          <div className="card-header">
            <h5>Order Details</h5>
          </div>
          <div className="card-body">
            <div className="clearfix"></div>
            {!isEmpty(order) && !isEmpty(shipping) ? (
              <div className="product-physical">
                <h4>Info customer</h4>
                <div className="row">
                  <div className="col-12 col-md-12 col-lg-12 col-xl-12">
                    <Table className="table-custom">
                      <thead>
                        <tr>
                          <th>Name</th>
                          <th>Email</th>
                          <th>Phone</th>
                          <th>Address</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>{user.name}</td>
                          <td>{user.email}</td>
                          <td>{formatPhone(user.phone || "")}</td>
                          <td>
                            {user.address !== null
                              ? order.user.address
                              : "No Address"}
                          </td>
                        </tr>
                      </tbody>
                    </Table>
                  </div>
                </div>
                <Divider />
                <h4>Info Receice</h4>
                <div className="row">
                  <div className="col-12 col-md-12 col-lg-12 col-xl-12">
                    <Table className="table-custom">
                      <thead>
                        <tr>
                          <th>Name</th>
                          <th>Phone</th>
                          <th>Payment</th>
                          <th>Note</th>
                          <th>Address</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>{shipping.name}</td>
                          <td>{formatPhone(shipping.phone || "")}</td>
                          <td>
                            {shipping.method === 0
                              ? "Cash"
                              : shipping.method === 1
                              ? "VN Pay"
                              : shipping.method === 2
                              ? "Momo"
                              : "Paypal"}
                          </td>
                          <td>
                            {shipping.note !== null ? shipping.note : "No Note"}
                          </td>
                          <td>{shipping.address}</td>
                        </tr>
                      </tbody>
                    </Table>
                  </div>
                </div>
                <Divider />

                <h4>Product Order</h4>
                <div className="row">
                  <div className="col-12 col-md-12 col-lg-12 col-xl-12">
                    <Table className="table-custom">
                      <thead>
                        <tr>
                          <th>#</th>
                          <th>Name</th>
                          <th>Price</th>
                          <th>Quantity</th>
                          <th>Total</th>
                        </tr>
                      </thead>
                      <tbody>
                        {products.map((product, index) => (
                          <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{product.product_name}</td>
                            <td>{formatPrice(product.product_price)}</td>
                            <td>{product.product_quantity}</td>
                            <td>{formatPrice(product.total_price)}</td>
                          </tr>
                        ))}
                      </tbody>
                    </Table>
                  </div>
                </div>
                <Divider />

                <h4>Payment Info</h4>
                <div className="row">
                  <div className="col-12 col-md-12 col-lg-12 col-xl-12">
                    <Table className="table-custom">
                      <thead>
                        <tr>
                          <th>Temp money</th>
                          <th>Coupon</th>
                          <th>Feeship</th>
                          <th>Total</th>
                          <th>Print Order</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>{formatPrice(productPrice)}</td>
                          <td>{formatPrice(couponPrice)}</td>
                          <td>{formatPrice(feeshipPrice)}</td>
                          <td>{formatPrice(totalPrice)}</td>
                          <td>
                            <Button
                              type="primary"
                              shape="round"
                              size="large"
                              disabled={initFetch}
                              loading={isDownloading}
                              icon={<DownloadOutlined />}
                              onClick={downloadFile}
                            >
                              Export PDF
                            </Button>
                          </td>
                        </tr>
                      </tbody>
                    </Table>
                  </div>
                </div>
              </div>
            ) : (
              <WaveTopBottomLoading />
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default OrderDetail;
