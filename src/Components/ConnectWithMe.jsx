import accounts from "../data/accounts.json";

import { Typography } from "@mui/material";

const ConnectWithMe = ({ theme }) => {
  const accountsList = [
    "linkedin",
    "github",
    "stackoverflow",
    "twitter",
    "instagram",
    "facebook",
    "email",
    "whatsapp",
  ];

  return (
    <>
      <Typography
        sx={{ textAlign: "center", fontSize: "18px", margin: "30px 0 0 0" }}
      >
        Connect with me
      </Typography>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          margin: "20px 0",
          flexWrap: "wrap",
        }}
      >
        {accountsList.map((item, idx) => {
          const account = accounts[item];
          return (
            <a key={idx} href={account.link} target="_blank">
              <img
                height="40"
                width="40"
                alt={account.name}
                src={
                  new URL(
                    `../assets/accounts/${account.image}`,
                    import.meta.url
                  ).href
                }
                style={{
                  filter:
                    account.invert && theme === "dark"
                      ? "brightness(100%) invert(80%)"
                      : "",
                }}
              />
            </a>
          );
        })}
      </div>
    </>
  );
};

export default ConnectWithMe;
