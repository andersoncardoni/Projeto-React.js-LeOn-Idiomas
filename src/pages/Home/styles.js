import styled from "styled-components";






export const Header = styled.header`

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 100px;
  border-bottom: 1px solid red;
  background: linear-gradient(180deg, rgba(0,0,0,0) 52%, rgba(0,0,0,0.5270483193277311) 100%);

  @media(max-width: 467px) {
    gap: 10px;
  }

img {
  width: 15%;
}

h1 {
  color: red;
  font-size: 40px;
  font-family: "Audiowide", sans-serif;

  @media(max-width: 651px) {
    font-size: 30px;
  }

  @media(max-width: 467px) {
    font-size: 20px;
  }

 
}

`


export const LogoBox = styled.div`

  display: flex;
  align-items: center;

img {
  width: 20%;
  height: 20%;
}

`

export const Article = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  

img {
  width: 200px;

  @media(max-width: 500px) {
    width: 40%;
  }
}

`

export const StudyOn = styled.div`
  display: flex;
  align-items: center;

`


export const Container = styled.div`

  display: flex;
  padding: 10px;
  position: absolute;
  margin-top: 80px;
  width: 90%;
  height: 300px;
  border-radius: 30px;
  border: 5px solid red;
  padding: 30px;
  justify-content: center;
  gap: 30px;
  background: linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(0,0,0,0.5722214362524838) 200%);

  @media(max-width: 467px) {
    margin-top: 68px;
  }

  @media(max-width: 412px) {
    margin-top: 58px;
  }


h2 {
  
  display: flex;
  justify-content: center;
  font-family: "Alegreya Sans SC", sans-serif;
  font-size: 25px;

  @media(max-width: 849px) {
    font-size: 17px;
  }

  @media(max-width: 650px) {
    font-size: 10px;
  }

  @media(max-width: 462px) {
    font-size: 8px;
  }
  
 
}



`


export const Q1 = styled.div`
  display: flex;
  background-color: #fff;
  flex-direction: column;
  gap: 10px;
  width: 300px;
  border-radius: 10px;
  border: 2px solid black;
  

`


export const Q2 = styled.div`
  width: 300px;
  border-radius: 10px;
  border: 2px solid black;
  background-color: #fff;

h2 {
  color: red;
 
}

`

export const Q3 = styled.div`
  width: 300px;
  height: 230px;
  border-radius: 10px;
  border: 2px solid black;
  background-color: #fff;
  

`


export const TextContainer = styled.p`

   font-size: 20px;
   margin: 8px;


  @media(max-width: 940px) {
    font-size: 16px;
  }

  @media(max-width: 816px) {
    font-size: 14px;
  }

  @media(max-width: 604px) {
    font-size: 11px;
  }

  @media(max-width: 660px) {
    font-size: 10px;
  }

  @media(max-width: 500px) {
    font-size: 8px;
  }

  @media(max-width: 405px) {
    font-size: 7px ;
  }

`


export const Section = styled.section`

  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 330px;
  height: 500px;
  gap: 20px;

  @media(max-width: 860px) {
    flex-direction: column;
    align-items: center;
    height: 1000px;
   
  }

  
  @media(max-width: 512px) {
    margin-top: 300px;
    height: 800px;
    gap: 50px;
  }
  
  
a {
  color: #fff;
  font-size: 14px;
  font-weight: bold;
  text-decoration: none;
} 


h4 {
  position: absolute;
  display: flex;
  justify-content: center;
  width: 38%;
  border-radius: 10px;
  background: linear-gradient(180deg, rgba(248,248,248,0.6329150778709809) 0%, rgba(255,255,255,0.3988110316282063) 0%);


  @media(max-width: 588px) {
    font-size: 10px;

  }
}


img {
  
  width: 100%;
  height: 100%;
  border-radius: 15px;

  @media(max-width: 512px) {
    width: 90%;
    height: auto;
    display: flex;
    justify-content: center;
  }

}

div {
  display: flex;
  align-items: center;
  flex-direction: column;
  background: linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(0,0,0,0.5722214362524838) 200%);
  height: 80%;
  width: 40%;
  border-radius: 15px;
  border: 5px solid black;

 
  h3 {
  
  font-family: "Alegreya Sans SC", sans-serif;
  font-size: 40px;

  @media(max-width: 512px) {
    font-size: 20px;
  }

}

  p {
  
  margin: 20px 40px 20px;
  font-size: 20px;

  
  @media(max-width: 512px) {
    font-size: 15px;
  }

  }
 

  @media(max-width: 860px) {
    width: 80%;
  }

  @media(max-width: 651px) {
    height: 40%;
  }

}



button {

  width: 45%;
  height: 17%;
  border-radius: 30px;
  border: none;
  background: linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(255,0,0,0.7687532281599982) 60%);
  cursor: pointer;


  &:hover {
    border: 2px solid black;
    width: 44%;
    transition: all .2s;
    
  }


  @media(max-width: 860px) {
    width: 30%;
    
    a {
      font-size: 20px;
    }
  }

  @media(max-width: 783px) {
    width: 25%;

    &:hover {
      width: 30%;
    }

    a{
      font-size: 13px;
    }
  }


  @media(max-width: 500px) {
    width: 30%;
    a {
      font-size: 10px;
    }
    
  }

  @media(max-width: 412px) {
    width: 40%;
  }

}


`




export const ZoomPlatform = styled.section`

  display: flex;
  flex-direction: column;
  align-items: center;
  border-top: 2px solid blue;
  border-bottom: 2px solid blue;
  width: 100%;
  height: 700px;
  margin: 20px 0 10px;
  color: #fff;
  gap: 20px;
  background: linear-gradient(229deg, rgba(0,0,0,0.8814699911657785) 5%, rgba(255,0,0,0.7959558823529411) 150%);


  @media(max-width: 660px) {
    height: 450px;
  }

a{
  text-decoration: none;
  font-weight: bold;
  color: #fff;
}


img {
  border-radius: 40px;
  width: 50%;
}

p {
  font-size: 30px;

  @media(max-width: 783px) {
    font-size: 20px;
  }

  @media(max-width: 651px) {
    font-size: 15px;
  }

  @media(max-width: 430px) {
    font-size: 13px;
  }
}

button {
  background: blue;
  border: none;
  width: 12%;
  height: 45%;
  border-radius: 30px;
  cursor: pointer;
  

  &:hover {
    transition: all .2s;
    background: black;
    
  }

  @media(max-width: 740px) {
    width: 20%;
  }

  @media(max-width: 412px) {
    
    a{
      font-size: 10px;
    }
  }
}


`

export const DivContact = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 200px;
  color: aliceblue;
  gap: 10px;

button {
  width: 15%;
  height: 100%;
  border-radius: 20px;
  border: none;
  background: blue;
  font-size: 11px;
  font-weight: bold;
  cursor: pointer;
  color: #fff;

  &:hover {
    transition: all .4s;
    
  }

  @media(max-width: 740px) {
    width: 25%;
  }

  @media(max-width: 540px){
    width: 35%;
  }

  @media(max-width: 412px) {
    
    a {
      font-size: 8px;
    }
  }
}


`


export const Certificate = styled.section`

  display: flex;
  gap: 20px;
  width: 100%;
  height: 50%;
  align-items: center;
  justify-content: center;
  font-size: 30px;
  margin-bottom: 40px;

  @media(max-width: 836px){
    p {
      font-size: 20px;
    }
  }

  a{
    text-decoration: none;
    color: #fff;
    font-weight: bold;
    font-size: 15px;
  }
  

  img {
    width: 20%;
  }

  button {
    width: 20%;
    cursor: pointer;
    border: none;
    border-radius: 20px;
    height: 50px;
    background: linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(255,0,0,0.7687532281599982) 60%);



    &:hover {
      
      border: 2px solid black;
      transition: all .2s;
      
    }

    @media(max-width: 860px){
      width: 30%;

      a {
        font-size: 16px;
      }
    }

    @media(max-width: 740px) {
      width: 40%;
    }

    @media(max-width: 651px) {
      a {
        font-size: 15px;
      }
    }

    @media(max-width: 412px) {
      width: 60%;

      a {
        font-size: 13px;
      }
    }

  }

  div {
    display: flex;
    flex-direction: column;
    margin: 0 30px 0;
    gap: 20px;
  }

  h5 {
    font-family: "Almendra SC", serif;
    font-size: 40px;

    @media(max-width: 836px) {
      font-size: 30px;
    }

    @media(max-width: 651px) {
      font-size: 20px;
    }
  }


`



export const Footer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-top: 1px solid black;
  height: 400px;
  gap: 20px;
  background: linear-gradient(180deg, rgba(255,255,255,0) 60%, rgba(255,0,0,0.8670191241137555) 140%);

  @media(max-width: 662px) {
    padding: 80px;
  }
   
  

  h4 {
  color: black;

  
  @media(max-width: 660px) {
      font-size: 10px;
    }

}

`

export const PagMoney = styled.div`


    display: flex;
    justify-content: center;
    
    @media(max-width: 660px) {
     
      p {
        font-size: 10px;
      }

    }
   

    p {
    position: absolute;
    font-weight: bold;
  }

  img {
    width: 30%;

    @media(max-width: 660px){
      width: 300px;
    }
  }

`



export const SocialMedia = styled.div`

  display: flex;
  gap: 30px;
  height: 30px;
 
  img {
      height: 25px;
      border: none;
      cursor: pointer;
      
  }
  
  
`









