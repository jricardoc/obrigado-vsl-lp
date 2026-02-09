import { motion } from "framer-motion";
import { FaInstagram, FaYoutube, FaTelegram } from "react-icons/fa";
import {
  FooterContainer,
  ContentWrapper,
  MainContent,
  Logo,
  TagLine,
  SocialLinks,
  SocialLink,
  BottomBar,
  Copyright,
  Developer,
  Divider,
} from "./styles";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <FooterContainer>
      <ContentWrapper>
        <MainContent>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Logo
              src="https://www.ocaradocopytrade.com/wp-content/uploads/2025/09/copytrade2.webp"
              alt="Logo O Cara do Copy Trade"
              width={200}
              height={60}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <TagLine>
              Academia de Copy Trade - Aprenda a investir com consistência e
              segurança
            </TagLine>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <SocialLinks>
              <SocialLink
                href="https://instagram.com/ocaradocopytrade"
                target="_blank"
                rel="noopener noreferrer"
                title="Siga no Instagram @ocaradocopytrade"
              >
                <FaInstagram aria-hidden="true" />
              </SocialLink>
              <SocialLink
                href="https://youtube.com/@ocaradocopytrade"
                target="_blank"
                rel="noopener noreferrer"
                title="Inscreva-se no canal do YouTube"
              >
                <FaYoutube aria-hidden="true" />
              </SocialLink>
              <SocialLink
                href="https://t.me/ocaradocopytrade"
                target="_blank"
                rel="noopener noreferrer"
                title="Entre no grupo do Telegram"
              >
                <FaTelegram aria-hidden="true" />
              </SocialLink>
            </SocialLinks>
          </motion.div>
        </MainContent>

        <BottomBar>
          <Copyright>
            Todos os direitos reservados O Cara do Copy Trade® {currentYear}
          </Copyright>
          <Divider />
          <Developer
            href="https://instagram.com/riccs.dev"
            target="_blank"
            rel="noopener noreferrer"
            title="Desenvolvido por Ricardo - @riccs.dev"
          >
            Desenvolvido por <span>@riccs.dev</span>
          </Developer>
        </BottomBar>
      </ContentWrapper>
    </FooterContainer>
  );
};

export default Footer;
