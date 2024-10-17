import {
  Header, LogoBox, Container, Q1, Q2, Q3, TextContainer, Article, StudyOn, Section, Footer,
  DivContact, ZoomPlatform, Certificate, SocialMedia, PagMoney, ImageSection
} from "./styles"
import ImageHeader from "../../assets/banner1.png"
import ImageLogo from "../../assets/logo1.png"
import ImageGif1 from "../../assets/logo-animado.gif"
import ImageSala1 from "../../assets/sala-curso.jpg"
import LogoFacebook from "../../assets/facebook.png"
import LogoInstagram from "../../assets/instagram.png"
import LogoWhatsapp from "../../assets/whatsapp.png"
import ZoomPc from "../../assets/zoom-pc.png"
import ZoomLogo from "../../assets/zoom-logo.png"
import ImgCertificate from "../../assets/certificado.png"
import ImgPag from "../../assets/pagamentos.png"
import LogoYoutube from "../../assets/youtube.png"
import ImageGif2 from "../../assets/logo2-animado.gif"
import ImageGif3 from "../../assets/logo3-animado.gif"
import LogoLocation from "../../assets/localizacao.png"




function Home() {

  return (

    <>
      <Header>
        <LogoBox>
          <img src={ImageLogo} alt="banner" />
          <h1>LeOn Idiomas</h1>
        </LogoBox>

        <img src={ImageHeader} alt="banner" />
      </Header>

      <Article>

        <StudyOn>
          <img src={ImageGif2} alt="gif" />
          <img src={ImageGif1} alt="gif" />
        </StudyOn>

        <Container>

          <Q1>
            <h2>Do zero à fluência</h2>
            <TextContainer>Nosso método de ensino inovador foi criado para te levar do zero à fluência em inglês, sem sair de casa.</TextContainer>
          </Q1>

          <Q2>
            <h2>Metodo Online</h2>
            <TextContainer>Criamos o método de ensino de inglês online mais efetivo para ajudar os brasileiros a alcançarem fluência no idioma.</TextContainer>

          </Q2>

          <Q3>
            <h2>Professores</h2>
            <TextContainer>Aprenda com professores nativos da língua inglesa
              Nós te preparamos para o inglês da vida real, ensinando sotaques de diversos países, como Estados Unidos, Inglaterra, Austrália, África do Sul e muito mais.</TextContainer>
          </Q3>

        </Container>

      </Article>



      <Section>


      <div>
          <h3>Nosso Espaço</h3>
          <p>Também temos AULAS PRESENCIAIS, ótima localização, perto das estações do metro.</p>
          <img src={ImageGif3} style={{ width: '40%', height: 'auto' }} alt="gif" />
          <p>Faça sua matricula agora !</p>
          <button><a href="https://api.whatsapp.com/send?phone=5511992174252" target="_blank">Matricule agora! Vagas limitadas. </a></button>
          
        </div>


        <ImageSection>
          <h4>Unidade Embu das Artes - SP</h4>

          <img src={ImageSala1} alt="img-sala" />

        </ImageSection>

      </Section>


      <ZoomPlatform>

        <div style={{ display: 'flex', alignItems: 'center', gap: '30px', width: '100%', justifyContent: 'center' }}>
          <p>Nossas aulas online são trasnmitidas através da plataforma Zoom.</p>
          <img src={ZoomLogo} style={{ width: '20%' }} alt="zoom-pc" />
        </div>

        <div style={{ display: 'flex', gap: '30px', justifyContent: 'center', width: '100%', height: '80px' }}>
          <p>O que é o Zoom ?</p>
          <button><a href="https://explore.zoom.us/pt/services-description/" target="_blank">Saiba mais</a></button>
        </div>

        <img src={ZoomPc} style={{ border: '1px solid blue' }} alt="zoom-pc" />

        <DivContact>
          <p>Não conseguiu acessar a plataforma ? Fale com nosso suporte!</p>

          <div style={{ display: 'flex', width: '100%', justifyContent: 'center', alignItems: 'center', gap: '10px' }}>
            <button><a href="https://api.whatsapp.com/send?phone=5511992174252" target="_blank">Falar com suporte online</a></button>
            <img src={LogoWhatsapp} style={{ width: '30px', height: '30px' }} alt="logo-whatsapp" />
          </div>

         

        </DivContact>

      </ZoomPlatform>


      <Certificate>

        <div>
          <h5>Curso de inglês com certificado!</h5>
          <p>Perca o medo de falar inglês de uma vez por todas com nossos professores e nossa metodologia exclusiva</p>
          <button><a href="https://api.whatsapp.com/send?phone=5511992174252" target="_blank">Quero ser fluente!</a></button>
        </div>

        <img src={ImgCertificate} alt="logo-certificado" />

      </Certificate>


      <Footer>

        <SocialMedia>

          <a href="https://www.facebook.com/?locale=pt_BR" target="_blank"><img src={LogoFacebook} alt="logo-face" /></a>
          <a href="https://www.instagram.com/" target="_blank"><img src={LogoInstagram} alt="logo-insta" /></a>
          <a href="https://www.youtube.com/" target="_blank"><img src={LogoYoutube} alt="logo-insta" /></a>
          <a href="https://www.google.com/maps/place/Embu+das+Artes+-+Jardim+Branca+Flor,+Embu+das+Artes+-+SP/@-23.6512141,-46.8550696,10543m/data=!3m2!1e3!4b1!4m6!3m5!1s0x94cfab703a900551:0xe5b57c51bbd4fcad!8m2!3d-23.6498081!4d-46.8532804!16zL20vMDNfczl6?hl=pt-BR&entry=ttu&g_ep=EgoyMDI0MTAwNS4wIKXMDSoASAFQAw%3D%3D" target="_blank"><img src={LogoLocation} alt="logo-maps" /></a>

        </SocialMedia>

        <h4>Horario de atendimento, Segunda - Quarta - Sexta das 08h ás 17h</h4>

        <PagMoney>
          <p>Formas de pagamentos</p>
          <img src={ImgPag} style={{ border: '1px solid black', borderRadius: '20px' }} alt="logo-pag" />
        </PagMoney>

      </Footer >





    </>


  )
}

export default Home
