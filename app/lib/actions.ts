'use server';

export async function createInvoice(formData: FormData) {
  const rawFormData = {
    customId: formData.get('customId'),
    amount: formData.get('amount'),
    status: formData.get('status'),
  };
  console.log('rawFormData', rawFormData);
}
