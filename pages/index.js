import { Box, Button, Text, TextField, Image } from "@skynexui/components";
import React from "react";
import appConfig from "../config.json";
import { useRouter } from "next/router";
import { replaceBasePath } from "next/dist/server/router";

//isso aqui é um h1 q usam como título
function Titulo(props) {
  const Tag = props.tag || "h1";
  return (
    <>
      <Tag>{props.children}</Tag>
      <style jsx>{`
        ${Tag} {
          color: ${appConfig.theme.colors.neutrals["000"]};
          font-size: 24px;
          font-weight: 600;
        }
      `}</style>
    </>
  );
}

// Componente React
// function HomePage() {
//     // JSX
//     return (
//         <div>
//             <GlobalStyle />
//             <Titulo tag="h2">Boas vindas de volta!</Titulo>
//             <h2>Discord - Alura Matrix</h2>
//         </div>
//     )
// }
// export default HomePage

//função que gera a página inicial
export default function PaginaInicial() {
  // const username = 'ThomasLincoln';
  const [username, setUsername] = React.useState("");
  const [id, setId] = React.useState("");
  const roteamento = useRouter();



  return (
    <>
      {/* essa primeira caixa é o background*/}
      <Box
        styleSheet={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundImage:
            "url(https://data.1freewallpapers.com/download/green-hair-izuku-midoriya-deku-yellow-background-my-hero-academia-1280x800.jpg)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundBlendMode: "multiply",
        }}
      >
        {/* essa segunda caixa é o container q fica no centro do cite */}
        <Box
          styleSheet={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexDirection: {
              xs: "column",
              sm: "row",
            },
            width: "100%",
            maxWidth: "700px",
            borderRadius: "5px",
            padding: "32px",
            margin: "16px",
            boxShadow: "0 2px 10px 0 rgb(0 0 0 / 20%)",
            backgroundColor: appConfig.theme.colors.neutrals[900],
          }}
        >
          {/* Formulário */}
          <Box
            as="form"
            onSubmit={function (informacoes_do_evento) {
              informacoes_do_evento.preventDefault();
              console.log("o usario submetou o form");
              roteamento.push("/chat");
              // window.location.href = '/chat';
            }}
            styleSheet={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              width: { xs: "100%", sm: "50%" },
              textAlign: "center",
              marginBottom: "32px",
            }}
          >
            <Titulo tag="h2">Boas vindas de volta!</Titulo>
            <Text
              variant="body3"
              styleSheet={{
                marginBottom: "32px",
                color: appConfig.theme.colors.neutrals[300],
              }}
            >
              {appConfig.name}
            </Text>
            {/* Isso aqui é o input de texto */}
            {/* <input
              type="text"
              //essa função é chamada quando o usuário digita
              
            /> */}
            <TextField
              fullWidth
              textFieldColors={{
                neutral: {
                  textColor: appConfig.theme.colors.neutrals[100],
                  mainColor: appConfig.theme.colors.neutrals[900],
                  mainColorHighlight: appConfig.theme.colors.primary[500],
                  backgroundColor: appConfig.theme.colors.neutrals[800],
                },
              }}
              value={username}
              onChange={function (informacoes_do_evento) {
                  //onde ta o valor
                  const valor = informacoes_do_evento.target.value;
                  //trocar o valor
                  setUsername(valor);
                  
                  fetch(`https://api.github.com/users/${valor}`)
                  .then(function (res) {
                    res.json().then(function (data) {
                      console.log(data.id);
                      setId(data.id)
                  });
                })
                .catch(function (err) {
                  console.error("Não foi possível achar a informação", err);
                });

              }}
            />
            <Button
              type="submit"
              label="Entrar"
              fullWidth
              buttonColors={{
                contrastColor: appConfig.theme.colors.neutrals["000"],
                mainColor: appConfig.theme.colors.primary[500],
                mainColorLight: appConfig.theme.colors.primary[400],
                mainColorStrong: appConfig.theme.colors.primary[600],
              }}
            />
          </Box>
          {/* fim do Formulário */}

          {/* Photo Area */}
          {/* Caixa da foto */}
          <Box
            styleSheet={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              maxWidth: "200px",
              padding: "16px",
              backgroundColor: appConfig.theme.colors.neutrals[800],
              border: "1px solid",
              borderColor: appConfig.theme.colors.neutrals[999],
              borderRadius: "10px",
              flex: 1,
              minHeight: "240px",
            }}
          >
            {/* Imagem */}
            {username.length > 2 && (
              <Image
                styleSheet={{
                  borderRadius: "50%",
                  marginBottom: "16px",
                }}
                src={`https://github.com/${username}.png`}
              />
            )}
            {/* Texto */}
            {username.length > 2 && (
              <Text
                variant="body4"
                styleSheet={{
                  color: appConfig.theme.colors.neutrals[200],
                  backgroundColor: appConfig.theme.colors.neutrals[900],
                  padding: "3px 10px",
                  borderRadius: "1000px",
                }}
              >
                {username} Id: {id}
              </Text>
            )}
          </Box>
          {/* Photo Area */}
        </Box>
      </Box>
    </>
  );
}
