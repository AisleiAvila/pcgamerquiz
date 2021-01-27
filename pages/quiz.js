import Head from 'next/head';
import React from 'react';
import styled from 'styled-components';
import db from '../db.json';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import QuizBackground from '../src/components/QuizBackground';
import QuizLogo from '../src/components/QuizLogo';
import Widget from '../src/components/Widget';


// const BackgroundImage = styled.div`
//   background-image: url(${db.bg});
//   flex: 1;
//   background-size: cover;
//   background-position: center;
// `;

export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;

export default function Home() {
    const pergunta = "< Pergunta 1 de 5";
    return (
        <QuizBackground backgroundImage={db.bg}>
            <Head>
                <title>PcgamerQuiz</title>
            </Head>
            <QuizContainer>
                <QuizLogo />
                <Widget>
                    <Widget.Header>
                        <h1>{pergunta}</h1>
                    </Widget.Header>
                    <Widget.Content>
                        <img src={db.imgQuestion1} width="400" height="100"></img>
                        <h1>Qual o maior oceano?</h1>
                        <Widget.Content>
                            <input type="radio" id="antartico" name="question01" value="1" />
                            <label for="antartico">Antártico</label>
                        </Widget.Content>
                        <Widget.Content>
                            <input type="radio" id="artico" name="question01" value="2" />
                            <label for="artico">Glacial Ártico</label>
                        </Widget.Content>
                        <Widget.Content>
                            <input type="radio" id="atlantico" name="question01" value="3" />
                            <label for="atlantico">Atlântico</label>
                        </Widget.Content>
                        <Widget.Content>
                            <input type="radio" id="pacifico" name="question01" value="4" />
                            <label for="pacifico">Pacífico</label>
                        </Widget.Content>
                        <Widget.Content>
                            <input type="radio" id="indico" name="question01" value="5" />
                            <label for="indico">Indico</label>
                        </Widget.Content>
                        <button type="submit">Confirmar</button>
                    </Widget.Content>
                </Widget>

                <Footer />
            </QuizContainer>
            <GitHubCorner projectUrl="https://github.com/AisleiAvila" />
        </QuizBackground>
    );
}