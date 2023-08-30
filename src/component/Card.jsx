import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import "../post.css"
import { Spinner, Button } from 'reactstrap';

const Card = () => {
  return (
    <div className="card">
        <div className="card-body">
            <h3 className="card-title">Basic React.JS</h3>
            <p className="card-text">
                  การใช้งาน React เบื้องต้น สำหรับการสร้างเว็บแอฟพลิเคชัน
            </p>
              <Button
                  color="primary"
                  disabled
              >
                  <Spinner size="sm">
                      Loading...
                  </Spinner>
                  <span>
                      {' '}Loading
                  </span>
              </Button>
        </div>
    </div>
  )
}

export default Card;
