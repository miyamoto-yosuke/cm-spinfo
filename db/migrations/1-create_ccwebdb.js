'use strict';

var Sequelize = require('sequelize');

/**
 * Actions summary:
 *
 * createTable "cm_aclg", deps: []
 * createTable "cm_mdmm", deps: []
 *
 **/

var info = {
    "revision": 1,
    "name": "create_ccwebdb",
    "created": "2019-03-12T05:27:22.401Z",
    "comment": ""
};

var migrationCommands = [{
        fn: "createTable",
        params: [
            "cm_aclg",
            {
                "al_idactv": {
                    "type": Sequelize.INTEGER(11),
                    "field": "al_idactv",
                    "autoIncrement": true,
                    "primaryKey": true,
                    "allowNull": false
                },
                "al_nmactv": {
                    "type": Sequelize.STRING(40),
                    "field": "al_nmactv",
                    "allowNull": false
                },
                "al_noactv": {
                    "type": Sequelize.INTEGER(11),
                    "field": "al_noactv",
                    "allowNull": false
                },
                "al_dtactv": {
                    "type": Sequelize.DATEONLY,
                    "field": "al_dtactv",
                    "allowNull": false
                },
                "al_cdsqsk": {
                    "type": Sequelize.STRING(8),
                    "field": "al_cdsqsk",
                    "allowNull": true
                },
                "al_nmsqsk": {
                    "type": Sequelize.STRING(200),
                    "field": "al_nmsqsk",
                    "allowNull": false
                },
                "al_nmsqbu": {
                    "type": Sequelize.STRING(200),
                    "field": "al_nmsqbu",
                    "allowNull": true
                },
                "al_nmsqtn": {
                    "type": Sequelize.STRING(200),
                    "field": "al_nmsqtn",
                    "allowNull": true
                },
                "al_txactv": {
                    "type": Sequelize.STRING(200),
                    "field": "al_txactv",
                    "allowNull": false
                },
                "al_susury": {
                    "type": Sequelize.INTEGER(11),
                    "field": "al_susury",
                    "allowNull": true
                },
                "al_kgtnka": {
                    "type": Sequelize.INTEGER(11),
                    "field": "al_kgtnka",
                    "allowNull": true
                },
                "al_kggoke": {
                    "type": Sequelize.INTEGER(11),
                    "field": "al_kggoke",
                    "allowNull": true
                },
                "al_txbiko": {
                    "type": Sequelize.STRING(500),
                    "field": "al_txbiko",
                    "allowNull": true
                },
                "al_cdcstm": {
                    "type": Sequelize.STRING(8),
                    "field": "al_cdcstm",
                    "allowNull": true
                },
                "al_nmcstm": {
                    "type": Sequelize.STRING(200),
                    "field": "al_nmcstm",
                    "allowNull": true
                },
                "al_nmtnbu": {
                    "type": Sequelize.STRING(200),
                    "field": "al_nmtnbu",
                    "allowNull": true
                },
                "al_nmtnto": {
                    "type": Sequelize.STRING(200),
                    "field": "al_nmtnto",
                    "allowNull": true
                },
                "createdAt": {
                    "type": Sequelize.DATE,
                    "field": "createdAt",
                    "allowNull": false
                },
                "updatedAt": {
                    "type": Sequelize.DATE,
                    "field": "updatedAt",
                    "allowNull": false
                }
            },
            {}
        ]
    },
    {
        fn: "createTable",
        params: [
            "cm_mdmm",
            {
                "md_idmdmm": {
                    "type": Sequelize.INTEGER(11),
                    "field": "md_idmdmm",
                    "autoIncrement": true,
                    "primaryKey": true,
                    "allowNull": false
                },
                "md_cdcstm": {
                    "type": Sequelize.STRING(8),
                    "field": "md_cdcstm",
                    "allowNull": false
                },
                "md_nommrb": {
                    "type": Sequelize.STRING(2),
                    "field": "md_nommrb",
                    "allowNull": false
                },
                "md_nmmmbr": {
                    "type": Sequelize.STRING(100),
                    "field": "md_nmmmbr",
                    "allowNull": true
                },
                "md_txmdmm": {
                    "type": Sequelize.STRING(400),
                    "field": "md_txmdmm",
                    "allowNull": false
                },
                "md_fganch": {
                    "type": Sequelize.INTEGER(1),
                    "field": "md_fganch",
                    "allowNull": true
                },
                "md_clmdmm": {
                    "type": Sequelize.STRING(10),
                    "field": "md_clmdmm",
                    "allowNull": true
                },
                "md_ccadip": {
                    "type": Sequelize.STRING(15),
                    "field": "md_ccadip",
                    "allowNull": true
                },
                "md_ccmodu": {
                    "type": Sequelize.STRING(20),
                    "field": "md_ccmodu",
                    "allowNull": true
                },
                "createdAt": {
                    "type": Sequelize.DATE,
                    "field": "createdAt",
                    "allowNull": false
                },
                "updatedAt": {
                    "type": Sequelize.DATE,
                    "field": "updatedAt",
                    "allowNull": false
                }
            },
            {}
        ]
    }
];

module.exports = {
    pos: 0,
    up: function(queryInterface, Sequelize)
    {
        var index = this.pos;
        return new Promise(function(resolve, reject) {
            function next() {
                if (index < migrationCommands.length)
                {
                    let command = migrationCommands[index];
                    console.log("[#"+index+"] execute: " + command.fn);
                    index++;
                    queryInterface[command.fn].apply(queryInterface, command.params).then(next, reject);
                }
                else
                    resolve();
            }
            next();
        });
    },
    info: info
};
