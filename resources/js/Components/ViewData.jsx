

export function ViewData({ objects, exclude = '' }) {
    const excludeFields = exclude.split(',').map(field => field.trim());

    if (!objects) return null;

    return (
        <div>
            {Object.keys(objects)
                .filter(object => !excludeFields.includes(object)) // Exclude fields
                .map(object => (
                    <div key={object} className="flex gap-x-3 mt-4">
                        <div>
                            <span className="text-amber-600">
                                {object.replace(/_/g, ' ').toUpperCase()}:
                            </span>
                        </div>
                        <div>{`${objects[object]}`.toUpperCase()}</div>
                    </div>
                ))}
        </div>
    );
}
