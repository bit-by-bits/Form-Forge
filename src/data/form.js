const data = {
  name: "Equipments",
  slug: "equipments",
  schema: {
    field_groups: [
      {
        name: "Equipment Information",
        slug: "equipment_information",
        fields: [
          {
            name: "Equipment No",
            slug: "equipment_no",
            type: "TEXT",
            min_length: 1,
            max_length: 255,
            is_unique: true,
            is_required: true,
          },
          {
            name: "First Name",
            slug: "first_name",
            type: "TEXT",
            min_length: 1,
            max_length: 255,
            is_required: true,
          },
          {
            name: "Last Name",
            slug: "last_name",
            type: "TEXT",
            min_length: 1,
            max_length: 255,
            is_required: true,
          },
          {
            name: "Mobile Phone",
            slug: "mobile_phone",
            type: "TEXT",
            pattern: "",
            is_required: true,
          },
          {
            name: "Email",
            slug: "email",
            type: "EMAIL",
            is_required: true,
          },
          {
            name: "Category",
            slug: "category",
            type: "DROPDOWN",
            is_required: true,
            is_external: false,
            is_multi: false,
            data_source_local: {
              options: [
                {
                  label: "Residential",
                  value: "Residential",
                },
                {
                  label: "Commercial",
                  value: "Commercial",
                },
              ],
            },
          },
          {
            name: "Sales tax code",
            slug: "sales_tax_code",
            type: "TEXT",
            min_length: 1,
            max_length: 255,
            is_required: false,
          },
          {
            name: "Invoice method",
            slug: "invoice_method",
            type: "DROPDOWN",
            is_required: true,
            is_external: false,
            is_multi: false,
            data_source_local: {
              options: [
                {
                  label: "Email",
                  value: "email",
                },
                {
                  label: "Paper",
                  value: "paper",
                },
              ],
            },
          },
          {
            name: "Invoice Type",
            slug: "invoice_type",
            type: "TEXT",
            min_length: 1,
            max_length: 255,
            is_required: false,
          },
        ],
      },
    ],
  },
};

export default data;
