import styled, { keyframes } from "styled-components";
import * as Dialog from "@radix-ui/react-dialog";

import { WEIGHTS } from "../../constants";

import UnstyledButton from "../UnstyledButton";
import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const MobileMenu = ({ isOpen, onDismiss }) => {
  const navItems = [
    { href: "/sale", text: "Sale" },
    { href: "/new", text: "New Releases" },
    { href: "/men", text: "Men" },
    { href: "/women", text: "Women" },
    { href: "/kids", text: "Kids" },
    { href: "/collections", text: "Collections" },
  ];

  return (
    <Dialog.Root open={isOpen} onOpenChange={onDismiss}>
      <Dialog.Portal>
        <Overlay />
        <Content>
          <ContentWrapper>
            <VisuallyHidden>
              <Dialog.Title>Mobile navigation</Dialog.Title>
              <Dialog.Description>Mobile navigation</Dialog.Description>
            </VisuallyHidden>

            <CloseButton onClick={onDismiss}>
              <Icon id="close" />
              <VisuallyHidden>Dismiss menu</VisuallyHidden>
            </CloseButton>

            <Filler />

            <Nav>
              {navItems.map((nav, index) => (
                <NavLink
                  key={nav.href}
                  href={nav.href}
                  style={{ "--animation-delay": `${700 + index * 100}ms` }}
                >
                  {nav.text.replace(" ", "\u00A0")}
                </NavLink>
              ))}
            </Nav>

            <Footer>
              <SubLink href="/terms">Terms and Conditions</SubLink>
              <SubLink href="/privacy">Privacy Policy</SubLink>
              <SubLink href="/contact">Contact Us</SubLink>
            </Footer>
          </ContentWrapper>
        </Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const slideIn = keyframes`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0%);
  }
`;

const fadeSlideIn = keyframes`
  from {
    opacity: 0;
    transform: translateX(16px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const Overlay = styled(Dialog.Overlay)`
  position: fixed;
  inset: 0;
  background: var(--color-backdrop);
  animation: ${fadeIn} 300ms ease-out;
`;

const Content = styled(Dialog.Content)`
  --overfill: 16px;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  background: white;
  width: calc(300px + var(--overfill));
  margin-right: calc(var(--overfill) * -1);
  height: 100%;
  padding: 24px 32px;

  @media (prefers-reduced-motion: no-preference) {
    animation: ${slideIn} 500ms both cubic-bezier(0, 0.6, 0.32, 1.06);
    animation-delay: 200ms;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const CloseButton = styled(UnstyledButton)`
  position: absolute;
  top: 10px;
  right: var(--overfill);
  padding: 16px;

  @media (prefers-reduced-motion: no-preference) {
    animation: ${fadeIn} 300ms ease-out both;
    animation-delay: 800ms;
  }
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const NavLink = styled.a`
  color: var(--color-gray-900);
  font-weight: ${WEIGHTS.medium};
  text-decoration: none;
  font-size: 1.125rem;
  text-transform: uppercase;

  &:first-of-type {
    color: var(--color-secondary);
  }

  @media (prefers-reduced-motion: no-preference) {
    animation: ${fadeSlideIn} 400ms ease-out both;
    animation-delay: var(--animation-delay);
  }
`;

const Filler = styled.div`
  flex: 1;
`;

const Footer = styled.footer`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 14px;
  justify-content: flex-end;
  opacity: 0;

  animation: ${fadeIn} 400ms ease-out both;
  animation-delay: 1200ms;
`;

const SubLink = styled.a`
  color: var(--color-gray-700);
  font-size: 0.875rem;
  text-decoration: none;
`;

export default MobileMenu;
