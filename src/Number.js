
const geturls = () => {
    const params = new URLSearchParams(window.location.search);
    const urls = params.getAll('url');
    return urls;
  };

const sorted_num= (x)=> {
  let num = x.reduce((merged, array) => merged.concat(array), []);
  let num1 = [...new Set(num)];
  return num1.sort((a, b) => a - b);
}

async function parse_res(res) {
  return Array.isArray(res) ? res : [];
}

const fetchurl = async (url) => {
    try {
      const response = await fetch(url, { timeout: 500 });
      const data = await response.json();
      return data.numbers;
    } catch (error) {
      console.error(`Error fetching URL: ${url}`, error);
      return [];
    }
  };

export { fetchurl, geturls, sorted_num, parse_res };
