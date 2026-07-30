def check_completeness(complaint: dict):

    required_fields = [
        "customer_name",
        "product_name",
        "batch_number",
        "manufacturing_date",
        "expiry_date",
        "complaint_date",
        "description",
    ]

    missing_fields = []

    for field in required_fields:

        value = complaint.get(field)

        if value is None or str(value).strip() == "":
            missing_fields.append(field)

    score = int(
        ((len(required_fields) - len(missing_fields))
         / len(required_fields)) * 100
    )

    return {
        "completeness_score": score,
        "missing_fields": missing_fields,
    }