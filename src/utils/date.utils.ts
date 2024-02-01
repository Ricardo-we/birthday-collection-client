
export function formatDateMMDD(date: Date) {
	return new Intl.DateTimeFormat('es-ES', { month: 'long', day: 'numeric' }).format(
		new Date(date)
	);
}

export function isToday(date: Date | string){
    const today = new Date();
	const date_ = new Date(date);
    return date_.getMonth() + date_.getDate() === today.getMonth() + today.getDate();
}

export function isFuture(date: Date | string){
    const today = new Date();
	const date_ = new Date(date);
    return date_.getMonth() > today.getMonth() || date_.getDate() > today.getDate();
}
