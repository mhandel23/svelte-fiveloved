import type { Actions } from './$types';

export const actions = {
  default: async ({ request }) => {
    const data = await request.formData();
    const term = data.get('q');

    console.log('term', term);
  }
} satisfies Actions;
