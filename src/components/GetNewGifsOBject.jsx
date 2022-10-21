const getNewGifsOBject = (endPointData) => {
	const newGifsObject = endPointData.map((item) => ({
		title: item.title,
		url: item.images.downsized_medium.url,
        id: item.id,
	}));
	return newGifsObject;
};

export default getNewGifsOBject;