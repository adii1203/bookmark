import {
  Html,
  Body,
  Preview,
  Head,
  Section,
  Heading,
  Text,
} from "@react-email/components";
interface VerifyEmailProps {
  email: string;
  otp: string;
}

export const VerifyEmail = ({ email, otp }: VerifyEmailProps) => {
  return (
    <Html>
      <Head />
      <Preview>Verify your email</Preview>
      <Body>
        <Section>
          <Heading>Verify your email address</Heading>
          <Text>Verify your email.</Text>
          <Section>
            <Text>Verification code</Text>
            <Text>{otp}</Text>
            <Text>(This code is valid for 10 minutes)</Text>
          </Section>
        </Section>
      </Body>
    </Html>
  );
};
