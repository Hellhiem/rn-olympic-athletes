import React, { useState } from 'react';
import { ThemeType } from 'types/common';
import styled from 'styled-components/native';

type PropsType = {
  text: string;
  showMoreText: string;
  showLessText: string;
  numberOfLines: number;
};

const Container = styled.View``;

const Text = styled.Text`
  font-size: ${({ theme }: { theme: ThemeType; }) => theme.paragraphFontSize};
`;

const FooterTextTouchable = styled.TouchableOpacity``;

const FooterText = styled.Text`
  font-size: ${({ theme }: { theme: ThemeType; }) => theme.paragraphFontSize};
  color: ${({ theme }: { theme: ThemeType; }) => theme.colors.blue};
`;

const ReadMoreText = ({ text, showMoreText, showLessText, numberOfLines }: PropsType) => {
  const [showMore, setShowMore] = useState(false);

  const toggleText = () => {
    setShowMore(!showMore);
  };

  return (
    <Container>
      <Text numberOfLines={showMore ? 0 : numberOfLines}>{text}</Text>
      <FooterTextTouchable
        onPress={toggleText}
      >
        <FooterText>{showMore ? showLessText : showMoreText}</FooterText>
      </FooterTextTouchable>
    </Container>
  );
};

export default ReadMoreText;