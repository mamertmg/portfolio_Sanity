export default{
    name: "startup",
    title: "Startup",
    type: "document",
    fields:[
        {
            name: "title",
            type: "string",
        },
        {
            name: "place",
            type: "string",
        },
        {
            name: "description",
            type: "text"
        },
        {
            name: "date",
            type: "datetime",
        },
        {
            name: "startupType",
            type: "string",
            title: "Startup type",
            options: {
              list: [
                { value: "SaaS", title: "SaaS" },
                { value: "Marketplace", title: "Marketplace" },
                { value: "Ecommerce", title: "Ecommerce" },
              ],
            },
        },
        {
            name: "website",
            type: "url",
        },
    ]
}