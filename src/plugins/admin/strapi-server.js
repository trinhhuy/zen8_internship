"use strict";

module.exports = ({ strapi }) => {
    return {
        async bootstrap() {
            const adminModel = strapi.plugins["admin"].contentTypes["admin"];

            // Thêm mối quan hệ với Project
            adminModel.attributes.projects = {
                type: "relation",
                relation: "oneToMany",
                target: "api::project.project", // Đường dẫn tới model Project
            };

            strapi.plugins["admin"].contentTypes["admin"] = adminModel;
        },
    };
};
