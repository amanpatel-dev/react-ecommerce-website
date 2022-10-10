import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
    projectId:'3rkdezbc',
    dataset:'production',
    apiVersion:'2022-10-09',
    useCdn:'true',
    token:process.env.NEXT_SANITY_TOKEN
});

const builder= imageUrlBuilder(client);

export const urlFor=(source)=>builder.image(source);