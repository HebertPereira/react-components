import TypographyList from "../../Utils/Constants/TypographyList";
import Typography from "../Typography";

import * as SocialAlertsStyles from "./styles";
import { ReactComponent as WhatsappIcon } from "../../Assets/Icons/whatsapp-logo.svg";

interface SocialAlertsProps {
  message: string;
  type: "whatsapp";
}

function SocialAlerts({ message = "whatsapp", type }: SocialAlertsProps) {
  const SwitchSocialAlerts = ({ children }: { children: React.ReactNode }) => {
    switch (type) {
      case "whatsapp":
        return (
          <SocialAlertsStyles.Container>
            <WhatsappIcon />
            {children}
          </SocialAlertsStyles.Container>
        );
    }
  };
  return (
    <SwitchSocialAlerts>
      <Typography type={TypographyList.h6} lineSpace="small">
        {message}
      </Typography>
    </SwitchSocialAlerts>
  );
}

export default SocialAlerts;
