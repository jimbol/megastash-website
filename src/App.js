import React from 'react';
import styled from 'styled-components';
import { CopyBlock, tomorrowNightBright } from 'react-code-blocks'

const CONTRAST = '#0b0b3d';
const BORDER_COLOR = '#b3b3b3';
const SUCCESS = '#00890a';
const ALT_BACKGROUND_COLOR = '#f7f7f7';

const Header = styled.header`
  background-color: white;
`;
const MaxWidth = styled.div`
  max-width: 1200px;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  margin: 0 auto;
`;
const Nav = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const NavItem = styled.a`
  color: ${CONTRAST};
  font-weight: bold;
  font-size: 16px;
  padding: 12px;
`;
const Logo = styled.img`
  width: 80px;
  padding: 16px;
`;
const Banner = styled.div`
  background-color: ${CONTRAST};
  background-image: url("background.png");
  background-repeat: no-repeat;
  background-position: center;
  min-height: 450px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const IntroText = styled.h2`
  box-sizing: border-box;
  max-width: 340px;
  padding: 16px;
  font-size: 34px;
  color: white;
  font-weight: normal;
  text-align: center;
  width: 50%;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const ServicesImg = styled.img`
  max-width: 640px;
  width: 50%;
  padding: 16px 0;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const SignUpContainer = styled.div`
  background-color: ${ALT_BACKGROUND_COLOR};
  border: 1px solid ${BORDER_COLOR};
  border-width: 0 0 1px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SignUpText = styled.h3`
  padding: 32px;
  margin: 0;
  font-size: 32px;
  color: white;
  font-weight: normal;
  text-align: center;
  color: ${CONTRAST};
`;
const InputRow = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 460px;
  width: 100%;
  padding: 0 8px 38px 8px;
  box-sizing: border-box;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
const MainContainer = styled.div`
  margin: 32px auto;
  max-width: 1260px;
  flex-direction: row;
  flex-wrap: wrap;
  display: flex;
`;
const Card = styled.div`
  padding: 32px;
  background-color: ${ALT_BACKGROUND_COLOR};
  border-radius: 8px;
  display: flex;
  flex-direction: row;
  box-sizing: border-box;
  @media (max-width: 768px) {
    align-items: center;
    flex-direction: column;
  }
`;
const OneHalf = styled.div`
  width: 50%;
  box-sizing: border-box;
  padding: 8px;
  align-items: center;
  @media (max-width: 768px) {
    margin-top: 8px;
    width: 100%;
    flex-direction: column;
  }
`;
const OneThird = styled.div`
  width: 33%;
  box-sizing: border-box;
  padding: 8px;
  align-items: center;
  @media (max-width: 768px) {
    margin-top: 8px;
    width: 100%;
    flex-direction: column;
  }
`;
const CardTextWrapper = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (max-width: 868px) {
    text-align: center;
    width: 100%;
  }
`;
const PriceWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;
`;
const Feature = styled.p`
  font-size: 18px;
  margin: 12px;
`;
const CardCopy = styled.p`
  color: ${CONTRAST};
  font-size: 16px;
  margin: 0;
`;
const CardHeader = styled.h3`
  color: ${CONTRAST};
  font-size: 26px;
  font-weight: bold;
  margin: 0;
  padding-bottom: 12px;
`;
const CardSuperHeader = styled.h2`
  box-sizing: border-box;
  color: ${CONTRAST};
  font-size: 32px;
  font-weight: bold;
  margin: 0;
  padding-bottom: 12px;
`;

const CardImg = styled.img`
  width: 40%;
  padding: 16px;
  @media (max-width: 768px) {
    width: 60%;
  }
`;

const PricingImg = styled.img`
  width: 40%;
  padding: 16px;
  background-color: #efefef;
  border-radius: 60%;
`;
const Content = styled.div`
  width: 100%;
  max-width: 900px;
  padding: 32px 64px;
  margin: 0 auto;
  box-sizing: border-box;
  @media (max-width: 768px) {
    padding: 12px 16px;
  }
`;
const FullWidthImg = styled.img`
  width: 100%;
  margin: 20px 0 20px 0;
  border-radius: 8px;
  border: 1px solid ${BORDER_COLOR};
`;
const Code = styled(CopyBlock)`
  font-family: monospace;
`;

function App() {
  return (
    <div>
      <Header>
        <MaxWidth>
          <Logo src="logo.png" alt="Megastash Logo" />
          <Nav>
            <NavItem href="#how">How it works</NavItem>
            <NavItem href="#price">Pricing</NavItem>
          </Nav>
        </MaxWidth>
      </Header>
      <Banner>
        <IntroText>The <strong>back end</strong> to your <strong>front end</strong>, in <strong>minutes</strong>, with <strong>no code</strong></IntroText>
        <ServicesImg src="services.png" alt="Database, Auth, Static resources, and API" />
      </Banner>
      <SignUpContainer>
        <SignUpText><strong>Get on the waiting list</strong> for early access</SignUpText>
        <InputRow>
          <div id="mc_embed_signup">
            <form action="https://mega-stash.us19.list-manage.com/subscribe/post?u=ce439a1b5acd3bfb51c7d4fd2&amp;id=cde18da061" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" noValidate>
              <div id="mc_embed_signup_scroll">
                <label htmlFor="mce-EMAIL"></label>
                <input type="email" name="EMAIL" className="email" id="mce-EMAIL" placeholder="Email" required />
                <div style={{
                  position: 'absolute',
                  left: -5000,
                }} aria-hidden="true"><input type="text" name="b_ce439a1b5acd3bfb51c7d4fd2_cde18da061" tabIndex="-1" /></div>
                <div className="clear"><input type="submit" name="subscribe" id="mc-embedded-subscribe" className="button" /></div>
              </div>
            </form>
          </div>
        </InputRow>
      </SignUpContainer>
      <MainContainer>
        <OneHalf>
          <Card>
            <CardImg
              src="static.png"
              alt="html, css, jpg, png, etc..."
            />
            <CardTextWrapper>
              <CardHeader>Easy Deploys</CardHeader>
              <CardCopy>Push your JS, HTML, and CSS to Github to deploy.</CardCopy>
            </CardTextWrapper>
          </Card>
        </OneHalf>
        <OneHalf>
          <Card>
            <CardImg
              src="payments.png"
              alt="Stripe integration"
            />

            <CardTextWrapper>
              <CardHeader>Built-in Payments</CardHeader>
              <CardCopy>Quickly set up payments with Stripe.</CardCopy>
            </CardTextWrapper>
          </Card>
        </OneHalf>
        <OneHalf>
          <Card>
            <CardImg
              src="api.png"
              alt="Autogenerated APIs"
            />

            <CardTextWrapper>
              <CardHeader>Trusted Resources</CardHeader>
              <CardCopy>Tried and true AWS infrastructure without all the work.</CardCopy>
            </CardTextWrapper>
          </Card>
        </OneHalf>
        <OneHalf>
          <Card>
            <CardImg
              src="auth.png"
              alt="Authentication and Authorization"
            />
            <CardTextWrapper>
              <CardHeader>Secure Access</CardHeader>
              <CardCopy>Quickly set up Authentication and Authorization, SSL Certificates, and User Permissions.</CardCopy>
            </CardTextWrapper>
          </Card>
        </OneHalf>
        <OneHalf>
          <Card>
            <CardImg
              src="database.png"
              alt="Databases"
            />
            <CardTextWrapper>
              <CardHeader>Highly Customizable</CardHeader>
              <CardCopy>Our flexible system allows for a huge variety of use cases.</CardCopy>
            </CardTextWrapper>
          </Card>
        </OneHalf>
        <Content id="how">
          <CardSuperHeader>How does it work?</CardSuperHeader>
          <CardHeader>Create Tables</CardHeader>
          <CardCopy>First you create your tables to house your app's data and set up permissions. We will automatically generate autoscaling APIs with documentation and TypeScript types for your tables as well as creating a dashboard for monitoring.</CardCopy>
          <FullWidthImg
            src="db-editor.png"
            alt="Database editor"
            />
          <br />
          <br />

          <CardHeader>Quickly Add Authentication</CardHeader>
          <CardCopy>Add the authentication interface to your React application with our easy-to-use component.</CardCopy>
          <br />
          <Code
            text={`import React, { useState } from 'react';
import { Authenticator } from 'mega-stash/auth';

const App = () => {
  const [authState, setAuthState] = useState();

  return (
    <Authenticator
      onChangeAuthState={setAuthState}
    >
      {(authState === 'SIGNED_IN') ? (<Main />) : null}
    </Authenticator>
  );
};
            `}
            language={'jsx'}
            showLineNumbers={false}
            theme={tomorrowNightBright}
            wrapLines
          />

          <br />
          <br />
          <CardHeader>Access Your Tables</CardHeader>
          <CardCopy>Use our front-end libraries to get, put, post, and delete based on permissions you set up.</CardCopy>
          <br />
          <Code
            text={`import { API } from 'mega-stash/api';

async function () {
  const results = await API.get(\`/article/\${article_id}\`);

  expect(results).toEqual({
    data: {
      articles: [{
        id: article_id,
        // and other article data
      }]
    },
  });
}
            `}
            language={'jsx'}
            showLineNumbers={false}
            theme={tomorrowNightBright}
            wrapLines
          />

        </Content>
        <Content id="price">
          <CardSuperHeader>Pricing</CardSuperHeader>
        </Content>
        <OneThird>
          <Card>
            <PriceWrapper>
              <CardSuperHeader>Indie</CardSuperHeader>
              <PricingImg
                src="indie.png"
                alt="Indie Developer"
              />
              <Feature><strong>20,000</strong> Requests</Feature>
              <Feature><strong>1,000</strong> Users per month</Feature>
              <Feature><strong>2</strong> Administrators</Feature>
              <br />
              <CardHeader>$12/month</CardHeader>
            </PriceWrapper>
          </Card>
        </OneThird>
        <OneThird>
          <Card>
            <PriceWrapper>
              <CardSuperHeader>Small Team</CardSuperHeader>
              <PricingImg
                src="small-team.png"
                alt="Small teams"
              />
              <Feature><strong>100,000</strong> Requests</Feature>
              <Feature><strong>5,000</strong> Users per month</Feature>
              <Feature><strong>8</strong> Administrators</Feature>
              <br />
              <CardHeader>$58/month</CardHeader>
            </PriceWrapper>
          </Card>
        </OneThird>
        <OneThird>
          <Card>
            <PriceWrapper>
              <CardSuperHeader>Growth Team</CardSuperHeader>
              <PricingImg
                src="growth.png"
                alt="Growth teams"
              />
              <Feature><strong>1,000,000</strong> Requests</Feature>
              <Feature><strong>20,000</strong> Users per month</Feature>
              <Feature><strong>∞</strong> Administrators</Feature>
              <br />
              <CardHeader>$216/month</CardHeader>
            </PriceWrapper>
          </Card>
        </OneThird>
      </MainContainer>
      <SignUpContainer style={{ borderTopWidth: 1 }}>
        <SignUpText>Get on the waiting list <strong>today!</strong></SignUpText>
        <InputRow>
          <div id="mc_embed_signup">
            <form action="https://mega-stash.us19.list-manage.com/subscribe/post?u=ce439a1b5acd3bfb51c7d4fd2&amp;id=cde18da061" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" noValidate>
              <div id="mc_embed_signup_scroll">
                <label htmlFor="mce-EMAIL"></label>
                <input type="email" name="EMAIL" className="email" id="mce-EMAIL" placeholder="Email" required />
                <div style={{
                  position: 'absolute',
                  left: -5000,
                }} aria-hidden="true"><input type="text" name="b_ce439a1b5acd3bfb51c7d4fd2_cde18da061" tabIndex="-1" /></div>
                <div className="clear"><input type="submit" name="subscribe" id="mc-embedded-subscribe" className="button" /></div>
              </div>
            </form>
          </div>
        </InputRow>
        <strong>Made with love in Ann Arbor, MI, U.S.A. </strong>
        <br />
        © 2020 Brooklet LLC
        <br />
        <br />
        <br />
      </SignUpContainer>
    </div>
  );
}

export default App;
