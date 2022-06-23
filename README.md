Теми прописується в themes або local-themes 

public_html/dev/tools/grunt/configs/local-themes.js

module.exports = {
    wine: {
        area: 'frontend',
        name: 'Srg/wines',
        locale: 'en_GB',
        files: [
            'css/styles-m',
            'css/styles-l',
            'css/email',
            'css/email-inline'
        ],
        dsl: 'less'
    },
    backend_GB: {
        area: 'adminhtml',
        name: 'Magento/backend',
        locale: 'en_GB',
        files: [
            'css/styles-old',
            'css/styles'
        ],
        dsl: 'less'
    }
};

тут назва теми wines 
grunt 
npm install -g grunt-cli якщо потрібно встановити grunt 

npm install

далі запускаємо команду grunt exec:wine && grunt less:wine  з під warden

grunt watch
