import { Text } from '@nextui-org/react';

function Footer() {
  return (
    <div style={{ zIndex: 1 }}>
      <Text
        style={{
          textAlign: 'center',
          backgroundColor: '#bce5ff',
          background: 'linear-gradient(to bottom, #bce5ff, #97cefa)',
        }}
      >
        Made with &hearts; by Lakshan Rukantha
      </Text>
    </div>
  );
}

export default Footer;
