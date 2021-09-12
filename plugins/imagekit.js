/* eslint-disable */
export default (_, inject) => {
    inject('imagekit', (name, transformations = null) => {
        transformations = transformations ? `/tr:${transformations}` : '';
        const suffix = !/\..{3}$/.test(name) ? '.jpg' : '';

        return `https://ik.imagekit.io/nem${transformations}/${name}${suffix}`;
    });
}
  