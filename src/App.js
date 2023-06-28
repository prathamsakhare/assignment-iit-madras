import "./App.css";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import LightModeIcon from "@mui/icons-material/LightMode";
import CloudQueueIcon from "@mui/icons-material/CloudQueue";
import AddBoxIcon from "@mui/icons-material/AddBox";
import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import ToggleOffIcon from "@mui/icons-material/ToggleOff";
import NearMeOutlinedIcon from "@mui/icons-material/NearMeOutlined";
import AccessTimeFilledOutlinedIcon from "@mui/icons-material/AccessTimeFilledOutlined";
import ChevronLeftOutlinedIcon from "@mui/icons-material/ChevronLeftOutlined";
import graphIcon from "./assets/chart.png";
import WaterDropOutlinedIcon from "@mui/icons-material/WaterDropOutlined";
import AirOutlinedIcon from '@mui/icons-material/AirOutlined';
import ThermostatOutlinedIcon from '@mui/icons-material/ThermostatOutlined';
import BeachAccessOutlinedIcon from '@mui/icons-material/BeachAccessOutlined';
function App() {
  return (
    <div className="App">
      <div className="main-div">
        <div className="left-side-div">
          <div className="top-icon-sec">
            <AddBoxIcon fontSize="large" style={{ color: "white" }} />
            <div className="mid-sec">
              <HorizontalRuleIcon
                fontSize="large"
                style={{ color: "white" }}
                color="white"
              />
            </div>
            <div className="end-sec">
              <p>C</p>
              <ToggleOffIcon fontSize="large" style={{ color: "white" }} />
              <p>F</p>
            </div>
          </div>
          <div className="mid-sec-time">
            <div className="place">
              <div className="place-topline">
                <NearMeOutlinedIcon />
                <p>New York, USA</p>
              </div>
              <p>Today 28 Sept</p>
            </div>
            <div className="place-time">
              <div className="place-time-sub">
                <AccessTimeFilledOutlinedIcon />
                <p>07:19</p>
              </div>
              <div className="place-time-sub">
                <AccessTimeFilledOutlinedIcon />
                <p>19:32</p>
              </div>
            </div>
          </div>
          <div className="bottom-div">
            <ChevronLeftOutlinedIcon
              fontSize="large"
              style={{ color: "white" }}
            />
            <div className="bottom-div-mid">
              <p>27</p>
              <div className="sunny">
                <LightModeIcon />
                <p>Sunny</p>
              </div>
            </div>
            <ChevronRightIcon fontSize="large" style={{ color: "white" }} />
          </div>
        </div>
        <div className="right-side-div">
          <div className="heading-icon">
            <div className="text-content">
              <p style={{ fontWeight: "700" }}>Welcome back Isabella!</p>
              <p>Check out today's weather information</p>
            </div>
            <div className="icon-content">
              <MoreHorizIcon />
              <AccountCircleIcon />
            </div>
          </div>

          <div className="graph">
            <div className="graph-content">
              <div className="graph-topline">
                <p>Upcoming hours</p>
                <div className="graph-topline-buttons">
                  <div className="btn1">
                    <p>Rain perception</p>
                    <KeyboardArrowDownIcon />
                  </div>
                  <div className="btn2">
                    <p>Next days</p>
                    <ChevronRightIcon />
                  </div>
                </div>
              </div>
              <div className="graph-time time-sec">
                <div className="graph-time-sec">
                  <p>Now</p>
                  <LightModeIcon />
                  <p>27</p>
                </div>
                <div className="graph-time-sec">
                  <p>11:00</p>
                  <LightModeIcon />
                  <p>28</p>
                </div>
                <div className="graph-time-sec">
                  <p>12:00</p>
                  <CloudQueueIcon />
                  <p>28</p>
                </div>
                <div className="graph-time-sec">
                  <p>13:00</p>
                  <CloudQueueIcon />
                  <p>29</p>
                </div>
                <div className="graph-time-sec">
                  <p>14:00</p>
                  <LightModeIcon />
                  <p>30</p>
                </div>
                <div className="graph-time-sec">
                  <p>15:00</p>
                  <CloudQueueIcon />
                  <p>29</p>
                </div>
                <div className="graph-time-sec">
                  <p>16:00</p>
                  <LightModeIcon />
                  <p>29</p>
                </div>
              </div>
            </div>
            <div className="img-div"><img src={graphIcon}  className="graph-image" /></div>
            
          </div>
          <div className="right-side-bottom" style={{ marginTop: "30px" }}>
            <p style={{ fontWeight: "700" }}>More details of today's weather</p>
            <div className="six-section-bottom">
            <div className="six-sec-first-row"> 
              {/* Section 1  */}

              <div className="sec-normal section-one">
                <div className="sec-normal-top-line">
                  <p>Humidity</p>
                  <div className="icon-box">
                    <WaterDropOutlinedIcon
                      style={{ color: "white" }}
                      fontSize="small"
                    />
                  </div>
                </div>
                <div className="sec-normal-mid-line">
                  <p style={{ fontSize: "16px", fontWeight: "600" }}>82%</p>
                  <p style={{ fontSize: "12px" }}>bad</p>
                </div>
                <div className="sec-normal-bottom-line">
                  <div className="subsec-bottom">
                  <p>good</p>
                  <div className="good-line"></div>
                  </div>
                  <div className="subsec-bottom">
                  <p>normal</p>
                  <div className="good-line"></div>
                  </div>
                  <div className="subsec-bottom">
                  <p>bad</p>
                  <div className="good-line" style={{backgroundColor : "#DCDCDC"}}></div>
                  </div>
                </div>
              </div>

              {/* section 2 */}
              <div className="sec-normal section-two">
                <div className="sec-normal-top-line">
                  <p>Wind</p>
                  <div className="icon-box">
                    <AirOutlinedIcon
                      style={{ color: "white" }}
                      fontSize="small"
                    />
                  </div>
                </div>
                <div className="sec-normal-mid-line">
                  <p style={{ fontSize: "16px", fontWeight: "600" }}></p>
                  <p style={{ fontSize: "12px" }}></p>
                </div>
                <div className="sec-normal-bottom-line">
                  <p>8km/h</p>
                </div>
              </div>

              {/* section 3 */}
              <div className="sec-normal section-three">
                <div className="sec-normal-top-line">
                  <p>Percipitation</p>
                  <div className="icon-box">
                    <WaterDropOutlinedIcon
                      style={{ color: "white" }}
                      fontSize="small"
                    />
                  </div>
                </div>
                <div className="sec-normal-mid-line">
                  <p style={{ fontSize: "16px", fontWeight: "600" }}>1.4 cm</p>
                </div>
                <div className="sec-normal-bottom-line">
                  <div className="subsec-bottom">
                  <p>0</p>
                  <div className="good-line"></div>
                  </div>
                  <div className="subsec-bottom">
                  <p>10</p>
                  <div className="good-line"></div>
                  </div>
                  <div className="subsec-bottom">
                  <p>20</p>
                  <div className="good-line"></div>
                  </div>
                  <div className="subsec-bottom">
                  <p>30</p>
                  <div className="good-line" style={{backgroundColor : "#DCDCDC"}}></div>
                  </div>
                  <div className="subsec-bottom">
                  <p>40</p>
                  <div className="good-line" style={{backgroundColor : "#DCDCDC"}}></div>
                  </div>
                  <div className="subsec-bottom">
                  <p>50</p>
                  <div className="good-line" style={{backgroundColor : "#DCDCDC"}}></div>
                  </div>
                  <div className="subsec-bottom">
                  <p>60</p>
                  <div className="good-line" style={{backgroundColor : "#DCDCDC"}}></div>
                  </div>
                  <div className="subsec-bottom">
                  <p>70</p>
                  <div className="good-line" style={{backgroundColor : "#DCDCDC"}}></div>
                  </div>
                  <div className="subsec-bottom">
                  <p>80</p>
                  <div className="good-line" style={{backgroundColor : "#DCDCDC"}}></div>
                  </div>
                  <div className="subsec-bottom">
                  <p>90</p>
                  <div className="good-line" style={{backgroundColor : "#DCDCDC"}}></div>
                  </div>
                </div>
              </div>


              </div>

              {/* first row ends */}


              {/* Second row starts */}
              <div className="six-sec-first-row"> 
              {/* Section 1  */}

              <div className="sec-normal section-four">
                <div className="sec-normal-top-line">
                  <p>UV index</p>
                  <div className="icon-box">
                    <LightModeIcon
                      style={{ color: "white" }}
                      fontSize="small"
                    />
                  </div>
                </div>
                <div className="sec-normal-mid-line">
                  <p style={{ fontSize: "20px", fontWeight: "700" }}>4</p>
                  <p style={{ fontSize: "16px" }}>medium</p>
                </div>
                <div className="sec-normal-bottom-line">
                  <div className="subsec-bottom">
                  <p>0-2</p>
                  <div className="good-line"></div>
                  </div>
                  <div className="subsec-bottom">
                  <p>3-5</p>
                  <div className="good-line"></div>
                  </div>
                  <div className="subsec-bottom">
                  <p>6-7</p>
                  <div className="good-line" style={{backgroundColor : "#DCDCDC"}}></div>
                  </div>
                  <div className="subsec-bottom">
                  <p>8-10</p>
                  <div className="good-line" style={{backgroundColor : "#DCDCDC"}}></div>
                  </div>
                  <div className="subsec-bottom">
                  <p>11+</p>
                  <div className="good-line" style={{backgroundColor : "#DCDCDC"}}></div>
                  </div>
                </div>
              </div>

              {/* section 2 */}
              <div className="sec-normal section-five">
                <div className="sec-normal-top-line">
                  <p>Feels like</p>
                  <div className="icon-box">
                    <ThermostatOutlinedIcon
                      style={{ color: "white" }}
                      fontSize="small"
                    />
                  </div>
                </div>
                <div className="sec-normal-mid-line">
                  <p style={{ fontSize: "24px", fontWeight: "700" }}>30</p>
                </div>
                <div className="sec-normal-bottom-line">
                  <div className="section-five-number-line">
                    <p>0</p>
                    <p>25</p>
                    <p>50</p>
                  </div>
                  <div className="good-line" style={{width : '100%'}}></div>
                  
                </div>
              </div>

              {/* section 6 */}
              <div className="sec-normal section-five six">
                <div className="sec-normal-top-line">
                  <p>Chances of rain</p>
                  <div className="icon-box">
                    <BeachAccessOutlinedIcon
                      style={{ color: "white" }}
                      fontSize="small"
                    />
                  </div>
                </div>
                <div className="sec-normal-mid-line">
                  <p style={{ fontSize: "24px", fontWeight: "700" }}>42%</p>
                </div>
                <div className="sec-normal-bottom-line">
                  <div className="section-five-number-line">
                    <p>0%</p>
                    <p>25%</p>
                    <p>50%</p>
                    <p>75%</p>
                    <p>100%</p>
                  </div>
                  <div className="good-line" style={{width : '100%'}}></div>
                  
                </div>
              </div>


              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
