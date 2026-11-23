/**
 * Tools opt in to the main (+) menu and the input-bar chip with frontmatter
 * in the first docstring of the tool source:
 *
 *   show_in_menu: true
 *   icon_url: data:image/svg+xml;base64,...   (optional, single line)
 *
 * The icon may instead be defined as `icon_url = (...)` at module level or on the
 * Tools class, which allows a long value split across lines. */
type ToolLike =
	| { meta?: { icon_url?: string | null; manifest?: Record<string, any> | null } | null }
	| null
	| undefined;

export const isMenuTool = (tool: ToolLike): boolean =>
	['true', '1', 'yes'].includes(
		String(tool?.meta?.manifest?.show_in_menu ?? '')
			.trim()
			.toLowerCase()
	);

export const getToolIcon = (tool: ToolLike): string | null =>
	tool?.meta?.icon_url || tool?.meta?.manifest?.icon_url || null;
