#!/bin/bash

mkdir -p .vscode

# Create settings.json with the specified configuration
cat > .vscode/settings.json << 'EOF'
{
  "typescript.tsdk": "node_modules/typescript/lib",
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": "explicit"
  },
  "[json]": {
    "editor.defaultFormatter": "vscode.json-language-features",
    "editor.formatOnSave": true
  }
}
EOF

echo "VSCode settings configured successfully ☄️"

# Common recommended extensions for TypeScript/JavaScript development
code --install-extension dbaeumer.vscode-eslint
code --install-extension esbenp.prettier-vscode
code --install-extension bradlc.vscode-tailwindcss

echo "Recommended VSCode extensions installed! 🐸"