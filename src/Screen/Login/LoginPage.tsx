import { Box, Checkbox, TextField, Typography } from "@mui/material"
import Input from "../../component/Input"
import ButtonCompo from "../../component/button"
import "./Login.css"
import { FormEvent, FormEventHandler, useState } from "react"
import { loginDetails, signUpDetails } from "../../typescriptDatatype/dataType"
import CloseIcon from '@mui/icons-material/Close';
import { useParams } from "react-router-dom"




export default function Login() {





  let [loginDetails, setLoginDetails] = useState<loginDetails>({
    loginEmail: "",
    loginPassword: "",
  })

  let [signupDetails, setSignupDetails] = useState<signUpDetails>({
    userName: "",
    userEmail: "",
    userPhone: "",
    userPassword: "",
  })

  let [showHidePage, setshowHidePage] = useState<boolean>(true)

  // Login CX
  const loginCoustomer = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault()
    console.log(loginDetails)
    console.log(signupDetails)
  }

  // input value
  const inputLogin = (loginInput: string, LoginName: string) => {
    if (showHidePage == true) {
      setLoginDetails((prev) => {
        return { ...prev, [loginInput]: LoginName }
      })
    }
    {
      setSignupDetails((prev) => {
        return { ...prev, [loginInput]: LoginName }
      })
    }
  }



  // show hide
  const pageChangeLogin = (value: boolean): void => {
    setshowHidePage(value)
  }

  
  return (
    <>
      {showHidePage ? (
        <Box sx={{position:"relative",zIndex:"11000"}}>
          <Box component={"section"} sx={style.box}>
            <Box
              sx={{
                display: "flex",
                height: "70vh",
                position:"relative",
                
                width: "70%",
                boxShadow: "0px 0px 16px 4px",
              }}
            >
              <Box sx={{ width: 500, mr: 2 }}>
                <div className="firstbox">
                  <Typography
                    variant={"h4"}
                    style={{
                      margin: 4,
                      fontFamily: "Edu AU VIC WA NT Arrows ,cursive",
                      position: "relative",
                      top: "145px",
                      left: "75px",
                      fontSize: "55px",
                      width: "268px",
                    }}
                  >
                    Tip /Mart
                  </Typography>
                </div>
              </Box>
              <Box>
              
    

                <Typography
                  sx={{
                    position: "absolute",
                    left: "70%",
                    mt: 2,
                    fontFamily: "Dancing Script, serif",
                    cursor: "pointer",
                    color:"blue",
                    padding: "3px",
                    top:" 334px",
                    width: "257px;",
                    textAlign: "center",
                    borderRadius: "5px",
                    fontSize: "19px",
                    zIndex:"1",
                    // textDecoration:"underline",
                    fontStyle:"italic",
  
                  }}
                  fontFamily={ "fantasy"}
                  component={"h5"}
                  onClick={() => pageChangeLogin(false)}
                >
                  <Typography variant="subtitle1" sx={{display:"inline" ,color:"black",textDecoration:"none"}}>Dont have account ? </Typography>
                   Sign-up 
                  
                </Typography>
                <CloseIcon sx={{position:"absolute",zIndex:1,right:"0px",bottom:"91%",fontSize:"37px",color:"white",background:"red",borderRadius:"3px"}}></CloseIcon>
                <Box
                  component={"form"}
                  onSubmit={loginCoustomer}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "",
                    height: "100%",
                    flexDirection: "column",
                    
                        backdropFilter: "blur(6px)",
                        maxWidth: "101%",
                      pr: "66px"
                  }}
                >
                  <Input
                    type="email"
                    label="Email Id"
                    style={{ mb: 1, width: 300 }}
                    name="loginEmail"
                    emailid={inputLogin}
                  />
                  <br></br>
                  <Input
                    type="password"
                    label="Password"
                    style={{ mt: 1, width: 300 }}
                    emailid={inputLogin}
                    name="loginPassword"
                  />
                  <br></br>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <Box
                      component={"div"}
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      {" "}
                      <Checkbox></Checkbox>
                      <Box component={"span"} sx={{ fontSize: "15px" }}>
                        Remember
                      </Box>
                    </Box>

                    <Box>
                      {" "}
                      <Box component={"span"} sx={{ fontSize: "15px", mb: 2 }}>
                        forgot password ?
                      </Box>
                    </Box>
                  </div>
                  <ButtonCompo
                    text={"Login"}
                    variant1="contained"
                    style={{ mt: 0, width: 100 }}
                    type="submit"
                  ></ButtonCompo>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      ) : (
        <Box sx={{position:"relative",zIndex:"11000"}}>
        <Box component={"section"} sx={style.box}>
          <Box
            sx={{
              display: "flex",
              height: "70vh",
              position:"relative",
              
              width: "70%",
              boxShadow: "0px 0px 16px 4px",
            }}
          >
            <Box sx={{ width: 500, mr: 2 }}>
              <div className="firstbox-signup">
                <Typography
                  variant={"h4"}
                  style={{
                    margin: 4,
                    fontFamily: "Edu AU VIC WA NT Arrows ,cursive",
                    position: "relative",
                    top: "30px",
                    left: "75px",
                    fontSize: "55px",
                    width: "268px",
                  }}
                >
                  Tip /Mart
                </Typography>
              </div>
            </Box>
            <Box>

            

              {/* It can be used  */}
              <Typography
                sx={{
                  position: "absolute",
                  left: "84%",
                  mt: 2,
                  fontFamily: "Dancing Script, serif",
                  cursor: "pointer",
                  color:"blue",
                  padding: "3px",
                  top:" 334px",
                  width: "142px;",
                  textAlign: "center",
                  borderRadius: "5px",
                  fontSize: "19px",
                  zIndex:"1",
                  textDecoration:"underline",
                  fontStyle:"italic",


                }}
                fontFamily={"fantasy"}
                component={"h5"}
                onClick={() => pageChangeLogin(true)}
              >
                Here is  Login
              </Typography>
              
              <CloseIcon  sx={{position:"absolute",zIndex:1,right:"0px",bottom:"91%",fontSize:"37px",color:"white",background:"red",borderRadius:"3px"}}></CloseIcon>

              <Box
                  component={"form"}
                  onSubmit={loginCoustomer}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "",
                    height: "100%",
                    flexDirection: "column",
                    width: "379px",
                    backdropFilter: "blur(16px)",
                    
                        maxWidth: "101%",
                      pr: "33px",
                      pl:"32px"
                  
                  }}
                >
                  <Input
                    type="text"
                    label="Full-Name"
                    style={{ mb: 1, width: 300 }}
                    name="userName"
                    variant="standard"
                    emailid={inputLogin} />
              
                  
                  <Input
                    type="email"
                    label="Email Id"
                    style={{ mb: 1, width: 300 }}
                    name="userEmail"
                    variant="standard"
                    emailid={inputLogin}
                  />
                  
                  <Input
                    type="Phone Number"
                    label="Phone no."
                    style={{ mb: 1, width: 300 }}
                    name="userPhone"
                    variant="standard"
                    emailid={inputLogin}
                  />
                  
                  <Input
                    type="password"
                    label="Password"
                    style={{ mb: 1, width: 300 }}
                    variant="standard"
                    name="userPassword"
                    emailid={inputLogin}
                  />
                  <Input
                    type="password"
                    label="Re-Password"
                    style={{ mb: 1, width: 300 }}
                    variant="standard"
                    name="usermatchPassword"
                    emailid={inputLogin}
                  />
                  
                  <ButtonCompo
                    text={"Sign-Up"}
                    variant1="contained"
                    style={{ mt: 0, width: 100 }}
                    type="submit"
                  ></ButtonCompo>
                </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      )}
    </>
  )
}

const style = {
  box: {
    display: "flex",
    justifyContent: "center",
    height: "100vh",
    alignItems: "center",
    width:"100%",
        position:" absolute",
    bottom: "54px",
    zIndex: "-1",
    background: "#ffffffba"
  },
}
