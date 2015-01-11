module.exports = function getDependencies(mod, result) {
    result = result || [];
    var dependencies = mod.dependencies || [];

    Object.keys(dependencies).forEach(function(dep) {
        var key = dep + '@' + tree.dependencies[dep].version;
        if(result.indexOf(key) === -1) result.push(key);
        getDependencies(mod.dependencies[dep], result);
    });

    return result.sort();
};
