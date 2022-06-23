/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

'use strict';

/**
 * Define Themes
 *
 * area: area, one of (frontend|adminhtml|doc),
 * name: theme name in format Vendor/theme-name,
 * locale: locale,
 * files: [
 * 'css/styles-m',
 * 'css/styles-l'
 * ],
 * dsl: dynamic stylesheet language (less|sass)
 *
 */
module.exports = {
    inter: {
        area: 'frontend',
        name: 'InterGlobal/Default',
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
