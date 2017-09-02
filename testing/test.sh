PARENT_DIRECTORY="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

cd "${PARENT_DIRECTORY}"
rm server.js
cp ../project/server.js ./
npm install
npm start
