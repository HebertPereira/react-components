import { ReactNode } from "react";

import Colors from "../../Utils/Constants/Colors";
import TypographyList from "../../Utils/Constants/TypographyList";
import * as TypographyStyles from "./styles";

interface TypographyProps {
  children: ReactNode;
  color?: Colors;
  isBold?: boolean;
  lineSpace?: "small" | "medium" | "large";
  type: TypographyList;
}

function Typography({
  children,
  color = Colors.Default,
  isBold = false,
  lineSpace = "medium",
  type = TypographyList.body,
}: TypographyProps) {
  return (
    <TypographyStyles.Box
      color={color}
      data-testid="typography-component"
      lineHeight={lineSpace}
      isBold={type === TypographyList.body && isBold}
      as={type}
    >
      {children}
    </TypographyStyles.Box>
  );
}

export default Typography;
