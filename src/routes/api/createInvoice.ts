import { config } from "@/config";
import type { APIEvent } from "@solidjs/start/server";

export async function POST(event: APIEvent) {
    const body = await new Response(event.request.body).json();

    const response = await fetch("https://app.midtrans.com/snap/v1/transactions", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Basic ${Buffer.from(config.MIDTRANS_KEY!).toString("base64")}`
        },
        body: JSON.stringify({
            transaction_details: {
                order_id: `angpao-${Date.now()}`,
                gross_amount: body.amount
            },
            enabled_payments: ["gopay"],
            metadata: {
                pesan: body.pesan
            }
        })
    }).then(async (res: Response) => {
        const { token } = await res.json();
        return fetch(`https://app.midtrans.com/snap/v2/transactions/${token}/charge`, {
            headers: {
                "content-type": "application/json",
            },
            method: "POST",
            body: JSON.stringify({
                payment_params: {
                    acquirer: [
                        "gopay"
                    ]
                },
                payment_type: "qris"
            })
        }).then(x => x.json());
    })

    return response;
}