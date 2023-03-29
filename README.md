setup eslint
https://dev.to/drsimplegraffiti/eslint-configuration-for-node-project-275l

https://dev.to/studio_m_song/how-to-make-eslint-work-with-prettier-avoiding-conflicts-and-problems-57pi

npm i -D eslint
npm i -D prettier
npx eslint --init
npm i -D eslint-config-prettier  
create .prettierrc file and paste :
{
"semi": false,
"singleQuote": true,
"trailingComma": "none",
"arrowParens": "avoid"
}

update eslintec.js with
extends: ['eslint:recommended', 'prettier'],

update package.json file :
"lint": "eslint ./src --ext .js"

1: npm run lint
