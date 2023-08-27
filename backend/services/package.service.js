const packageService = (packageRepository) => {
    
    const getPackages = async () => {
        const result = await packageRepository.getPackages();

        return result;
    }

    return {
        getPackages
    }
}


module.exports = packageService;