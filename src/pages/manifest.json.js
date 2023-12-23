// import { getImage } from "astro:assets";
// import favicon from "../images/favicon.png";

// const faviconPngSizes = [192, 512];

// export const GET = async () => {
//   const icons = await Promise.all(
//     faviconPngSizes.map(async (size) => {
//       const image = await getImage({
//         src: favicon,
//         width: size,
//         height: size,
//         format: "png",
//       });
//       return {
//         src: image.src,
//         type: `image/${image.options.format}`,
//         sizes: `${image.options.width}x${image.options.height}`,
//       };
//     })
//   );

//   const manifest = {
//     name: "Mesto za Mene | Podrška pri neplaniranoj trudnoći",
//     short_name: "Mesto za Mene",
//     description:
//       "Mesto za mene je besplatno savetovalište za žene koje se suočavaju sa neplaniranom i/ili kriznom trudnoćom i nastalo je po ugledu na centre koji postoje širom sveta (Pregnancy Help Centers).",
//     start_url: "/",
//     display: "standalone",
//     id: "mesto-za-mene",
//     icons,
//   };

//   return new Response(JSON.stringify(manifest))
// };
